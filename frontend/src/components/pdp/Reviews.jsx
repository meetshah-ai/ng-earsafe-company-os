import React, { useState, useRef } from 'react';
import { Star, BadgeCheck, Camera, X, ImagePlus, PenLine } from 'lucide-react';
import { toast } from 'sonner';
import { reviewSummary, reviews as seedReviews } from '../../mock/mock';

const Stars = ({ n, size = 14 }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star key={s} size={size} className={s <= n ? 'fill-ng-cyan text-ng-cyan' : 'text-ng-sand'} />
    ))}
  </div>
);

const PhotoPair = ({ photos, onView }) => (
  <div className="mt-3 flex gap-2">
    {photos.map((p, i) => (
      <button key={i} onClick={() => onView(p.url)} className="relative w-20 h-20 rounded-lg overflow-hidden border border-ng-sand group">
        <img src={p.url} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
        <span className="absolute bottom-0 inset-x-0 bg-ng-navy/80 text-white text-[9px] font-semibold text-center py-0.5 tracking-wide uppercase">{p.label}</span>
      </button>
    ))}
  </div>
);

const UploadSlot = ({ label, image, onPick, onClear }) => {
  const ref = useRef(null);
  return (
    <div>
      <input ref={ref} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) onPick(URL.createObjectURL(f)); }} />
      {image ? (
        <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-ng-navy">
          <img src={image} alt={label} className="w-full h-full object-cover" />
          <span className="absolute bottom-0 inset-x-0 bg-ng-navy/80 text-white text-[10px] font-semibold text-center py-1 uppercase tracking-wide">{label}</span>
          <button onClick={onClear} className="absolute top-1.5 right-1.5 bg-white text-ng-navy rounded-full p-1 shadow"><X size={12} /></button>
        </div>
      ) : (
        <button type="button" onClick={() => ref.current?.click()} className="w-full aspect-square rounded-xl border-2 border-dashed border-ng-sand hover:border-ng-cyan flex flex-col items-center justify-center gap-1.5 text-ng-muted hover:text-ng-navy transition-colors">
          <ImagePlus size={22} />
          <span className="text-[11px] font-semibold uppercase tracking-wide">{label} photo</span>
        </button>
      )}
    </div>
  );
};

const ReviewForm = ({ onSubmit, onCancel }) => {
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [before, setBefore] = useState(null);
  const [after, setAfter] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !body.trim()) { toast.error('Please add your name and a few words'); return; }
    const photos = [];
    if (before) photos.push({ label: 'Before', url: before });
    if (after) photos.push({ label: 'After', url: after });
    onSubmit({ name: name.trim(), city: 'Verified Buyer', rating, date: 'Just now', verified: true, title: title.trim() || 'My experience', body: body.trim(), photos });
    toast.success('Thanks! Your review is live', { description: 'Your before/after photos have been added.' });
  };

  return (
    <form onSubmit={submit} className="bg-white rounded-2xl border border-ng-sand p-6 mb-6 animate-fade-up">
      <div className="flex items-center justify-between">
        <h4 className="font-display font-bold text-ng-navy uppercase">Share your before / after</h4>
        <button type="button" onClick={onCancel} className="text-ng-muted hover:text-ng-navy"><X size={18} /></button>
      </div>

      <div className="mt-4 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <button type="button" key={s} onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(0)} onClick={() => setRating(s)}>
            <Star size={26} className={s <= (hover || rating) ? 'fill-ng-cyan text-ng-cyan' : 'text-ng-sand'} />
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mt-4">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="h-11 px-4 rounded-xl border border-ng-sand bg-ng-cream/40 focus:border-ng-cyan focus:outline-none text-sm" />
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Review title (optional)" className="h-11 px-4 rounded-xl border border-ng-sand bg-ng-cream/40 focus:border-ng-cyan focus:outline-none text-sm" />
      </div>
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="How did your scalp and hair feel?" rows={3} className="mt-3 w-full px-4 py-3 rounded-xl border border-ng-sand bg-ng-cream/40 focus:border-ng-cyan focus:outline-none text-sm resize-none" />

      <div className="mt-4">
        <p className="text-sm font-semibold text-ng-navy flex items-center gap-1.5 mb-2"><Camera size={15} className="text-ng-cyan" /> Add your before & after photos</p>
        <div className="grid grid-cols-2 gap-3 max-w-xs">
          <UploadSlot label="Before" image={before} onPick={setBefore} onClear={() => setBefore(null)} />
          <UploadSlot label="After" image={after} onPick={setAfter} onClear={() => setAfter(null)} />
        </div>
      </div>

      <button type="submit" className="mt-5 h-11 px-6 rounded-full bg-ng-navy text-white font-semibold text-sm hover:bg-ng-navy-dark transition-colors">Post review</button>
    </form>
  );
};

const Reviews = () => {
  const [list, setList] = useState(seedReviews);
  const [showForm, setShowForm] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const allPhotos = list.flatMap((r) => (r.photos || []).map((p) => p.url));

  const addReview = (r) => {
    setList((l) => [r, ...l]);
    setShowForm(false);
  };

  return (
    <section id="reviews" className="bg-ng-sand/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-ng-cyan font-display font-bold text-sm tracking-widest uppercase">Loved across India</p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ng-navy uppercase leading-[1.05] mt-3">What people say</h2>
          </div>
          <button onClick={() => setShowForm((s) => !s)} className="self-start md:self-auto h-11 px-5 rounded-full border-2 border-ng-navy text-ng-navy font-semibold text-sm flex items-center gap-2 hover:bg-ng-navy hover:text-white transition-colors">
            <PenLine size={16} /> Write a review
          </button>
        </div>

        {/* Customer photo strip */}
        {allPhotos.length > 0 && (
          <div className="mt-8">
            <p className="text-sm font-semibold text-ng-navy mb-3 flex items-center gap-1.5"><Camera size={16} className="text-ng-cyan" /> Customer photos ({allPhotos.length})</p>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              {allPhotos.map((url, i) => (
                <button key={i} onClick={() => setLightbox(url)} className="shrink-0 w-24 h-24 rounded-xl overflow-hidden border border-ng-sand hover:border-ng-cyan transition-colors">
                  <img src={url} alt={`Customer ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-2xl border border-ng-sand p-8 h-fit lg:sticky lg:top-24">
            <div className="flex items-end gap-3">
              <span className="font-display font-extrabold text-5xl text-ng-navy">{reviewSummary.rating}</span>
              <div className="mb-1">
                <Stars n={Math.round(reviewSummary.rating)} size={18} />
                <p className="text-xs text-ng-muted mt-1">Based on {reviewSummary.total} reviews</p>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              {reviewSummary.breakdown.map((b) => (
                <div key={b.star} className="flex items-center gap-3">
                  <span className="text-xs text-ng-muted w-6">{b.star}★</span>
                  <div className="flex-1 h-2 rounded-full bg-ng-cream overflow-hidden">
                    <div className="h-full bg-ng-cyan rounded-full" style={{ width: `${b.pct}%` }} />
                  </div>
                  <span className="text-xs text-ng-muted w-8 text-right">{b.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            {showForm && <ReviewForm onSubmit={addReview} onCancel={() => setShowForm(false)} />}
            <div className="grid sm:grid-cols-2 gap-5">
              {list.map((r, idx) => (
                <div key={`${r.name}-${idx}`} className="bg-white rounded-2xl border border-ng-sand p-6">
                  <div className="flex items-center justify-between">
                    <Stars n={r.rating} />
                    <span className="text-xs text-ng-muted">{r.date}</span>
                  </div>
                  <h4 className="font-display font-bold text-ng-navy mt-3">{r.title}</h4>
                  <p className="mt-2 text-sm text-ng-ink/75 leading-relaxed">{r.body}</p>
                  {r.photos && r.photos.length > 0 && <PhotoPair photos={r.photos} onView={setLightbox} />}
                  <div className="mt-4 flex items-center gap-2 pt-3 border-t border-ng-sand">
                    <span className="w-8 h-8 rounded-full bg-ng-navy text-white flex items-center justify-center font-display font-bold text-xs">{r.name.charAt(0)}</span>
                    <div>
                      <p className="text-sm font-semibold text-ng-navy leading-tight">{r.name}</p>
                      <p className="text-xs text-ng-muted leading-tight">{r.city}</p>
                    </div>
                    {r.verified && (
                      <span className="ml-auto flex items-center gap-1 text-[11px] text-ng-cyan font-semibold"><BadgeCheck size={14} /> Verified</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightbox && (
        <div onClick={() => setLightbox(null)} className="fixed inset-0 z-50 bg-ng-navy/80 backdrop-blur flex items-center justify-center p-6">
          <button className="absolute top-5 right-5 text-white bg-white/10 rounded-full p-2"><X size={22} /></button>
          <img src={lightbox} alt="Customer photo" className="max-w-full max-h-[85vh] rounded-2xl object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default Reviews;

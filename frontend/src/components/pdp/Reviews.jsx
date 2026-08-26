import React from 'react';
import { Star, BadgeCheck } from 'lucide-react';
import { reviewSummary, reviews } from '../../mock/mock';

const Stars = ({ n, size = 14 }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star key={s} size={size} className={s <= n ? 'fill-ng-cyan text-ng-cyan' : 'text-ng-sand'} />
    ))}
  </div>
);

const Reviews = () => (
  <section id="reviews" className="bg-ng-sand/60">
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <p className="text-ng-cyan font-display font-bold text-sm tracking-widest uppercase">Loved across India</p>
      <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ng-navy uppercase leading-[1.05] mt-3">What people say</h2>

      <div className="grid lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-white rounded-2xl border border-ng-sand p-8 h-fit">
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

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl border border-ng-sand p-6">
              <div className="flex items-center justify-between">
                <Stars n={r.rating} />
                <span className="text-xs text-ng-muted">{r.date}</span>
              </div>
              <h4 className="font-display font-bold text-ng-navy mt-3">{r.title}</h4>
              <p className="mt-2 text-sm text-ng-ink/75 leading-relaxed">{r.body}</p>
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
  </section>
);

export default Reviews;

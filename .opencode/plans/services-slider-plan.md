# Replace GSAP horizontal scroll with Swiper slider

## Files to change

### 1. `app/page.js`

**Remove:**
- `useEffect`, `useRef` from React imports
- `gsap`, `ScrollTrigger` imports
- `gsap.registerPlugin(ScrollTrigger)`
- `horizontalRef` and the entire `useEffect` GSAP block

**Restructure services section (lines 201-262):**

Replace the current `main_horizontal` block (with `horizontalRef`) with a single `<Swiper>`:

```jsx
{/* ── Services ── */}
<div className="main_horizontal">
  <h2 className="sub_title">OUR SERVICES</h2>
  <div className="sub_heading">A glimpse of what we do</div>

  <Swiper
    modules={[Autoplay, Navigation]}
    loop
    slidesPerView={1}
    spaceBetween={0}
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    navigation={{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }}
    className="services-swiper"
  >
    {/* Static intro - these slides are now inside the same swiper */}
    {SERVICES.map((s) => (
      <SwiperSlide key={s.number}>
        <div className="services_slide">
          <div className="services_text">
            <h3 className="sub_title">{s.subtitle}</h3>
            <div className="sub_heading">
              {s.heading.split("\n").map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </div>
            <p>{s.body}</p>
            <Link href={s.href} className="cta_text">
              Take a <span>Look</span>
            </Link>
          </div>
          <div className="services_image">
            <Image
              src={s.img.src}
              alt={s.subtitle}
              width={s.img.w}
              height={s.img.h}
              className="dark_img"
            />
          </div>
        </div>
      </SwiperSlide>
    ))}

    <div className="slide_cta">
      <div className="swiper-button-prev cta_text">
        View <span>Previous</span>
      </div>
      <div className="swiper-button-next cta_text">
        View <span>Next</span>
      </div>
    </div>
  </Swiper>
</div>
```

### 2. `public/assets/scss/component/home-sections.scss`

**Remove/update these blocks:**

- `.main_horizontal` — keep `padding-top: 15rem`
- `.horizontal_section` — **remove entirely** (no longer needed)
- `.horizontal_sliders` — **remove entirely** (replaced by `.services_slide`)
- `.horizontal_sliders.slide-2` — **remove entirely**

**Add new styles:**

```scss
.services-swiper {
  position: relative;
  padding-bottom: 10rem;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.services_slide {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 6.5rem;

  @include mobile() {
    flex-direction: column;
    padding: 0 6.5rem;
    gap: 4rem;
  }

  .services_text {
    flex: 1;
    max-width: 55rem;

    .sub_heading {
      font-size: 9.5rem;
      @include mobile() {
        font-size: 8rem;
      }
    }

    p {
      max-width: 50rem;
    }
  }

  .services_image {
    flex-shrink: 0;

    img {
      width: 67.2rem;
      max-width: 100%;
      height: auto;
      @include mobile() {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
}
```

Update the `.slide_cta` within the services section context (not absolute):

```scss
.services-swiper .slide_cta {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: auto;
  margin-top: 4rem;
  bottom: auto;
  right: auto;

  .cta_text {
    gap: 1rem;
    color: $black;
    font-size: 2.6rem;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: relative;
    top: auto;
    margin-top: 0;
    width: auto;
    height: auto;
    background-image: none;
    color: $black_40;

    &::after {
      display: none;
    }

    span {
      color: $black_40;
    }
  }
}
```

### 3. `public/assets/css/style.css`

Apply the same CSS changes as in the SCSS file, but directly in the compiled CSS. Specifically:
- Remove `.horizontal_section` rules
- Remove `.horizontal_sliders` rules
- Remove `.horizontal_sliders.slide-2` rules
- Add `.services-swiper`, `.services_slide`, and `.services-swiper .slide_cta` rules (same as SCSS)

### 4. `public/assets/scss/gsap.scss`

This file only contained `.horizontal_sliders` styles. It can be left as-is (unused) or cleaned up.

## Summary of changes

| File | Change |
|------|--------|
| `page.js` | Remove GSAP, restructure services section into one Swiper with nav buttons |
| `home-sections.scss` | Remove old horizontal scroll styles, add centered services_slide layout |
| `style.css` | Same CSS changes as SCSS |

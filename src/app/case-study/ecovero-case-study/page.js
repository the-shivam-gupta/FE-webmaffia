"use client";

import Image from "next/image";
import Banner from "@/components/Banner";
import CaseStudyCreativeSection from "@/components/CaseStudyCreativeSection";
import ContactFormSection from "@/components/ContactFormSection";

const CREATIVE_POSTS = [
    {
        src: "/assets/images/work/case-study/posts/ecovero-post1.png",
        alt: "Ecovero post 1",
    },
    {
        src: "/assets/images/work/case-study/posts/ecovero-post2.png",
        alt: "Ecovero post 2",
    },
    {
        src: "/assets/images/work/case-study/posts/ecovero-post3.png",
        alt: "Ecovero post 3",
    },
    {
        src: "/assets/images/work/case-study/posts/ecovero-post4.png",
        alt: "Ecovero post 4",
    },
    {
        src: "/assets/images/work/case-study/posts/ecovero-post5.png",
        alt: "Ecovero post 5",
    },
    {
        src: "/assets/images/work/case-study/posts/ecovero-post6.png",
        alt: "Ecovero post 6",
    },
    {
        src: "/assets/images/work/case-study/posts/ecovero-post7.png",
        alt: "Ecovero post 7",
    },
];

const STRAPI_MEDIA_URL =
    process.env.NEXT_PUBLIC_STRAPI_URL ?? "https://cms.webmaffia.com";

const CREATIVE_REELS = [
    {
        src: "/assets/images/ecovero/ecovero-banner.png",
        alt: "Ecovero reel 1",
        video: `${STRAPI_MEDIA_URL}/uploads/ecovero_reel1_657b59cd28.mp4`,
    },
    {
        src: "/assets/images/ecovero/ecovero-banner.png",
        alt: "Ecovero reel 2",
        video: `${STRAPI_MEDIA_URL}/uploads/ecovero_reel2_7464ef8824.mp4`,
    },
    {
        src: "/assets/images/ecovero/ecovero-banner.png",
        alt: "Ecovero reel 3",
        video: `${STRAPI_MEDIA_URL}/uploads/ecovero_reel3_36e4053d89.mp4`,
    },
    {
        src: "/assets/images/ecovero/ecovero-banner.png",
        alt: "Ecovero reel 4",
        video: `${STRAPI_MEDIA_URL}/uploads/ecovero_reel4_c8a6ab662e.mp4`,
    },
];

const INSTAGRAM_URL = "https://www.instagram.com/lexotique.fruits/";

const bannerData = {
    imagePosition: "background",
    priority: true,
    title: {
        line1: "ECOVERO™",
    },
    subtitle: {
        enabled: true,
        text: "Making Sustainable Fashion\n Mainstream in India",
    },
    description:
        "ECOVERO™ branded viscose fibers -certified by the EU Ecolabel, sourced from sustainable wood and pulp - arrived in India with a powerful global story but no local voice. We built that voice from the ground up.",
    images: {
        banner: {
            url: "/assets/images/ecovero/ecovero-banner.png",
            alt: "",
            width: 1920,
            height: 981,
        },
        bannerMobile: {
            url: "",
            alt: "",
        },
    },
};

export default function LexotiqueCaseStudyPage() {
    return (
        <main className="wrapper">
            <div className="ml-setter lexotique_detail">
                <Banner data={bannerData} />


                <div className="detail_sections">
                    <section
                        data-section="detail_challenge"
                        className="detail_challenge flex"
                    >
                        <div className="challenge_content">
                            <h2 className="challenge_content__title">
                                The <br />
                                Challenge
                            </h2>
                            <p className="challenge_content__para">
                                Sustainable fashion in India was a niche conversation in a mass market. ECOVERO™ had the credentials -up to 50% lower emissions than generic viscose, full supply chain transparency, certified eco-responsible sourcing -but credentials alone don't build a brand. The audience didn't know ECOVERO™ existed, and even fewer knew why it mattered. The task was to make eco-conscious fashion feel relevant, aspirational, and worth choosing.
                            </p>
                        </div>
                        <picture className="detail_section_media">
                            <Image
                                src="/assets/images/work/case-study/ecovero-challenge.png"
                                alt=""
                                width={684}
                                height={835}
                                className="dark_img detail_section_img"
                            />
                        </picture>
                    </section>

                    <section data-section="detail_solution" className="detail_solution flex">

                        <div>
                            <h2>
                                The Strategy <br /> & Solution
                            </h2>
                            <p>
                                We led with the cause before the brand. Instead of pushing ECOVERO™ first, we warmed the audience to the idea of responsible fashion -then positioned the brand as its most credible answer.
                            </p>
                            <ul className="jashList2">
                                <li>
                                    <h5>Phase 1 -Build the conversation</h5>
                                    <p>
                                    Targeted communications introduced eco-friendly fashion as a value worth caring about, meeting the audience where their interests already lived.
                                    </p>
                                </li>
                                <li>
                                    <h5>Phase 2 - Own the moment at Lakmé Fashion Week</h5>
                                    <p>
                                    Two consecutive LFW activations placed ECOVERO™ at the heart of India's most visible sustainable fashion stage.
                                    </p>
                                </li>
                                <li>
                                    <h5>LFW 2019 with Abraham & Thakore</h5>
                                    <p>
                                    Sustainable Fashion Day coverage spanning backstage, rehearsals, designer interviews, and showstopper moments. Influencers, bloggers, and models created layered, organic content that extended the brand's reach well beyond the runway.
                                    </p>
                                </li>
                                <li>
                                    <h5>LFW 2020 with Ritu Kumar</h5>
                                    <p>
                                    A deeper, more immersive activation around the 'Nature's Origami' collection. We ran the <strong>#NoExcuses</strong> activity -sustainability quotes on placards, captured with the designer, showstopper, and models backstage -turning the event into a shareable, cause-driven moment. The content lived long after the show ended.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <picture className="detail_section_media">
                            <Image
                                src="/assets/images/work/case-study/ecovero-solution.png"
                                alt=""
                                width={684}
                                height={835}
                                className="dark_img detail_section_img"
                            />
                        </picture>
                    </section>
                </div>

                <CaseStudyCreativeSection
                    instagramUrl={INSTAGRAM_URL}
                    posts={CREATIVE_POSTS}
                    reels={CREATIVE_REELS}
                />

                <section data-section="client_work" className="client_work">
                    <h2 className="client_work__title">
                        Don't just take our <br />
                        word for it
                    </h2>
                    <div className="client_para">Read what our client have to say</div>
                    <div className="client_testimonial">
                        <div className="testimonial_wrapper">
                            <div className="swiper-slide">
                                <div className="testimonial_content">
                                    The website growwithhoabl.com is exceptionally well made —
                                    seamless, intuitive, and smooth in its functionality. The
                                    overall experience was effortless, and everything worked
                                    perfectly across sections. Truly a job well done!
                                </div>
                                <div className="company">
                                    <Image
                                        src="/assets/images/hoabl/hoabl-testi.webp"
                                        alt=""
                                        width={91}
                                        height={91}
                                    />
                                    <div>
                                        <div className="name">Priyam Shukla</div>
                                        <div className="work">DGM - Digital Marketing</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image
                            src="/assets/images/testimonial_img.webp"
                            alt=""
                            className="client_img"
                            width={678}
                            height={877}
                        />
                    </div>
                </section>

                <section data-section="contact_section" className="hoabl_contact_section">
                    <ContactFormSection
                        variant="light"
                        showIllustration
                        idPrefix="hoabl"
                    />
                </section>
            </div>
        </main>
    );
}

import CampaignHeroVideo from "@/components/CampaignHeroVideo";

const CAMPAIGN_POSTER = "/assets/images/work/campaign/tata-housing_campaign.png";
const CAMPAIGN_VIDEO = "/assets/videos/tata-housing-diwali-campaign.mp4";

export default function TataHousingCampaignPage() {
    return (
        <main className="wrapper campaigns">
            <div className="ml-setter campaign_page">
                <section data-section="hero_section" className="hero_section campaign_hero flex">
                    <div className="campaign_content">
                        <div className="sub_title">STORIES WE TELL</div>
                        <h1>
                            Explore our <br />
                            latest work
                        </h1>
                        <p>
                            The campaign was rooted in the truest spirit of Diwali light, warmth, togetherness, and the feeling of being exactly where you belong. At its heart, #GharWohJahan captured what a home really means during the most celebratory time of the year. Not a property. A feeling. The place where every corner glows, every moment is wrapped in love, and every memory is made.
                        </p>
                        <p>The idea was simple but deeply resonant Diwali is the one time of year when people feel the pull of home the strongest. Across six creatives, TATA Housing tapped into everything the festival represents the joy of family reuniting, the laughter and beautiful chaos of togetherness, the warmth of lighting diyas in your own space, and even the quiet, reflective moments after the celebrations settle.</p>
                        <p>Blending Hindi and English seamlessly, the messaging felt personal and culturally rooted, while consistently reinforcing TATA Housing's promise of sustainable, safe, and community-friendly living. It spoke directly to the aspirational homebuyer, the one who imagines hosting family in their own living room, celebrating in a space that truly feels theirs, built by a brand they trust.</p>
                        <p>More than a real estate campaign, it was an emotion. Because TATA Housing wasn't selling apartments they were selling the place where your best Diwali memories happen. #GharWohJahan.</p>
                    </div>
                    <CampaignHeroVideo poster={CAMPAIGN_POSTER} videoSrc={CAMPAIGN_VIDEO} />
                </section>
            </div>
        </main>
    );
}

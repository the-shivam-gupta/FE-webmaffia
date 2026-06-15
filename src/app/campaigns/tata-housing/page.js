import CampaignHeroVideo from "@/components/CampaignHeroVideo";

const CAMPAIGN_POSTER = "/assets/images/work/campaign/tata-housing_campaign.png";
const CAMPAIGN_VIDEO = "/assets/videos/tata-housing-diwali-campaign.mp4";

export default function TataHousingCampaignPage() {
    return (
        <main className="wrapper campaigns">
            <div className="ml-setter campaign_page">
                <section data-section="hero_section" className="hero_section campaign_hero flex">
                    <div className="campaign_content">
                        <div className="sub_title">Tata Housing | Diwali Campaign</div>
                        <h1>
                            #GharWohJahan
                        </h1>
                        <p>
                        Diwali is the one time of year when the pull of home is undeniable. We built the entire campaign around that feeling.
                        </p>
                        <p>#GharWohJahan didn't sell apartments. It sold belonging - the warmth of your own diya, the chaos of family filling your living room, the quiet after the celebrations settle. Across six creatives, every piece of content tapped into what Diwali really means to the aspirational Indian homebuyer.</p>
                        <p>The messaging blended Hindi and English naturally - culturally rooted, emotionally resonant, and consistently tied to Tata Housing's core promise of safe, sustainable, community-first living.</p>
                        <p>The result was a campaign that didn't feel like real estate advertising. It felt like a memory you hadn't made yet.</p>
                        <h4>What Was the Impact</h4>
                        <ul>
                            <li>580,000+ people reached across Instagram and Facebook</li>
                            <li>520,000+ impressions delivered across 6 creatives</li>
                            <li>6,500+ interactions generated</li>
                            <li>Instagram drove massive reach - over 360,000 people reached on the platform alone</li>
                            <li>Facebook drove deep engagement - Creative 1 alone clocked 4,500+ interactions</li>
                            <li>Reels extended the campaign's reach to an additional 180,000+ users on Facebook</li>
                        </ul>
                        <p>More than numbers, the campaign delivered a message that a home isn't just a purchase with Tata Housing, it's where your most cherished moments find their address.</p>
                    </div>
                    <CampaignHeroVideo poster={CAMPAIGN_POSTER} videoSrc={CAMPAIGN_VIDEO} />
                </section>
            </div>
        </main>
    );
}

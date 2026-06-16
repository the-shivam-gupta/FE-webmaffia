import Image from "next/image";
import CampaignHeroVideo from "@/components/CampaignHeroVideo";

const CAMPAIGN_POSTER = "/assets/images/work/campaign/birla-campaign.png";
const CAMPAIGN_VIDEO =
    "https://cms.webmaffia.com/uploads/BSLMF_Not_So_Taxing_Campaign_Case_Study_1_c17c0aa0af.mp4";

const CAMPAIGN_AWARDS = [
    {
        image: "/assets/images/awards/2baconil-award-1.png",
        title: "Indian Digital Media Awards",
        year: "2019",
        type: "Gold",
        description: "Innovation in Mobile Marketing",
    },
    {
        image: "/assets/images/awards/2baconil-award-2.png",
        title: "ET Shark Awards",
        year: "2022",
        type: "Bronze",
        description: "Best Use of Mobile Campaign",
    },
];

export default function BirlaSunLifeCampaignPage() {
    return (
        <main className="wrapper campaigns">
            <div className="ml-setter campaign_page">
                <section data-section="hero_section" className="hero_section campaign_hero flex">
                    <div className="campaign_content">
                        <div className="sub_title">Birla Sun Life Mutual Fund</div>
                        <h1>
                            #NotSoTaxing
                        </h1>
                        <h4>What We Did</h4>
                        <p>
                            Tax planning has a perception problem. Most investors see it as stressful, confusing, and best left to the last minute. To promote the Birla Sun Life Tax Relief '96 Fund, we set out to flip that narrative entirely not with an ad, but with a challenge.
                        </p>
                        <p>We launched the #NotSoTaxing Challenge across social media, inviting people to show that tax saving doesn't have to be complicated. The format was participatory by design: video entries, influencer amplification, and a hook that made engaging with a mutual fund brand feel genuinely fun.
                        </p>
                        <p>Running in parallel, our #SabseImportantPlan strategy educated audiences on SIP investments and long-term financial goals through Facebook, Twitter, and LinkedIn turning product information into conversation. Multiple campaign threads ran concurrently, each built around a distinct emotional hook, from celebrating fathers to unlocking first-time experiences.</p>
                        <p>To extend reach beyond the feed, we integrated offline activations with the digital campaigns across Pan India ensuring the message landed where our audience actually lived, not just where they scrolled.</p>
                        <h4>What Was the Impact</h4>
                        <p>The campaigns significantly strengthened Birla Sun Life Mutual Fund's social media presence and drove meaningful conversations around investing and tax saving.</p>
                        <ul>
                            <li>#SabseImportantPlan, #AChanceToFly, and #NotSoTaxing each trended in the top 3 on India Twitter</li>
                            <li>The #NotSoTaxing Challenge received more than 800 video entries from participants</li>
                            <li>Twitter celebrities and influencers participated organically, extending reach without paid amplification</li>
                            <li>Lighthouse Insights featured the brand's topical content among the best-performing posts on social media</li>
                            <li>Campaign India and Economic Times covered the campaign, putting Birla Sun Life Mutual Fund in editorial conversations about digital marketing</li>
                            <li>Meaningful growth in followers and engagement rates across all social platforms</li>
                            <li>Increased awareness around SIP investing through integrated online and offline engagement</li>
                        </ul>
                        <p>More than the numbers, the campaign proved a point: tax planning doesn't have to be taxing. By meeting investors where they were on their feeds, in their emotions, and with a challenge worth joining we made a mutual fund feel like something worth talking about.</p>
                    </div>
                    <CampaignHeroVideo poster={CAMPAIGN_POSTER} videoSrc={CAMPAIGN_VIDEO} />
                </section>
            </div>
        </main>
    );
}

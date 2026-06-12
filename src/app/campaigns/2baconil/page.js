import Image from "next/image";
import CampaignHeroVideo from "@/components/CampaignHeroVideo";

const CAMPAIGN_POSTER = "/assets/images/work/campaign/2baconil_campaign.png";
const CAMPAIGN_VIDEO = "/assets/videos/2baconil-campaign.mp4";

export default function TwoBaconilCampaignPage() {
    return (
        <main className="wrapper campaigns">
            <div className="ml-setter campaign_page">
                <section data-section="hero_section" className="hero_section campaign_hero flex">
                    <div className="campaign_content">
                        <div className="sub_title">2baconil</div>
                        <h1>
                            #12 Weeks, Not 12 Months
                        </h1>
                        <h4>What We Did</h4>
                        <p>
                            To reach affluent, tech-savvy corporate smokers from Tier 1 cities, we deployed an emotional campaign video, social media challenges, and digital banners with advanced remarketing guiding smokers from awareness all the way to purchase.

                        </p>
                        <p>With 120 million smokers in India accounting for 12% of the world's smoking population, we built India's first-ever mobile lung capacity test for 2baconil intercepting smokers right at their New Year resolution moment. Using a mobile browser app, users blew into their phone's microphone to lift three balloons in a single breath, while a proprietary algorithm measured their lung capacity and suggested the right therapy based on their smoking habits.
                        </p>
                        <h4>What Was the Impact</h4>
                        <p>The campaign ran for just six days and the results spoke for themselves.</p>
                        <ul>
                            <li>5 Million+ people reached</li>
                            <li>5,00,000+ campaign views</li>
                            <li>1,00,000+ clicks generated</li>
                            <li>21,600+ people took the lung capacity test</li>
                            <li>900+ leads generated month-on-month at ₹300 cost per lead</li>
                            <li>20% reduction in cost per lead</li>
                            <li>30% reduction in cost per conversion</li>
                        </ul>
                        <p>More than numbers, the campaign delivered a message that quitting smoking isn't easy, but with 2baconil, you can do it in 12 weeks, not 12 months.</p>
                        <h4>Recognition</h4>
                        <div className="campaign_award">
                            <Image
                                src="/assets/images/icons/gold-medal.png"
                                alt=""
                                width={512}
                                height={512}
                                className="campaign_award_icon"
                                aria-hidden="true"
                            />
                            <span>Gold – Indian Digital Media Awards 2019, Innovation in Mobile Marketing</span>
                        </div>
                        <div className="campaign_award">
                            <Image
                                src="/assets/images/icons/bronze-medal.png"
                                alt=""
                                width={512}
                                height={512}
                                className="campaign_award_icon"
                                aria-hidden="true"
                            />
                            <span>Bronze – ET Shark Awards, Best Use of Mobile Campaign</span>
                        </div>
                    </div>
                    <CampaignHeroVideo poster={CAMPAIGN_POSTER} videoSrc={CAMPAIGN_VIDEO} />
                </section>
            </div>
        </main>
    );
}

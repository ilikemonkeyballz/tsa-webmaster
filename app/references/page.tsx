"use client";

import { useEffect, useState } from "react";

const WEB_RESOURCES = [
  { name: "ACAP Bergen County", citation: "ACAP Bergen County – ACAPCommunity. (n.d.).", url: "https://acapcommunity.org/find-a-chapter/acap-bergen-county/" },
  { name: "Habitat for Humanity of Bergen County", citation: "Affordable Housing & Community Support | Habitat Bergen. (2026, February 19). HABITAT FOR HUMANITY OF BERGEN COUNTY.", url: "https://habitatbergen.org/" },
  { name: "AcT Now Foundation – Bergen County Dementia Friendly Initiative", citation: "Bergen County Dementia Friendly Initiative | AcT Now Foundation. (n.d.). Act Now Foundation.", url: "https://www.actnowfoundation.org/bergen-county-dementia-friendly-initiative" },
  { name: "Bergen County Office of Food Security", citation: "Bergen County Office of Food Security. (n.d.). Bergen County Office of Food Security.", url: "https://bergenfightshunger.org/" },
  { name: "Family Promise of Bergen County", citation: "Bergen Family Promise. (2026, March 30). Home - family promise of Bergen County.", url: "https://www.bergenfamilypromise.org/" },
  { name: "Bergen New Bridge Medical Center", citation: "Bergen New Bridge Medical Center. Bergen New Bridge Medical Center | Paramus, NJ.", url: "https://www.newbridgehealth.org" },
  { name: "CarePlus NJ", citation: "Care Plus NJ, Inc. (2026, March 5). Behavioral Health & Addiction Services | Care Plus NJ.", url: "https://careplusnj.org/" },
  { name: "1st Cerebral Palsy of NJ", citation: "Cerebral Palsy School in NJ for Special needs - 1st Cerebral Palsy of NJ. (n.d.). 1st Cerebral Palsy of New Jersey.", url: "https://www.cerebralpalsycenter.org/" },
  { name: "Englewood Health", citation: "Englewood Health. (n.d.). Englewood Health.", url: "https://www.englewoodhealth.org" },
  { name: "Bergen County Job Center", citation: "Ey. (2026, March 23). Home - Bergen County Job Center. Bergen County Job Center.", url: "https://bergenjobcenter.com/" },
  { name: "Glen Rock Senior Services", citation: "Glen Rock New Jersey - Senior Services. (2026, January 13). Glen Rock, New Jersey.", url: "https://glenrocknj.net/resident/seniors" },
  { name: "Goodwill NY/NJ", citation: "Goodwill NY/NJ. (n.d.). Goodwill Industries of New York and New Jersey.", url: "https://www.goodwillnynj.org/" },
  { name: "Greater Bergen Community Action", citation: "Greater Bergen Community Action, Inc. - GBCA | anti-poverty agency | 392 Main Street, Hackensack, NJ, USA. (n.d.). Gbc1.", url: "https://www.greaterbergen.org/" },
  { name: "Habitat for Humanity ReStores", citation: "Habitat for Humanity ReStores | Habitat for Humanity. (n.d.). Habitat for Humanity.", url: "https://www.habitat.org/restores" },
  { name: "Center for Hope & Safety", citation: "Home - Center for Hope & Safety. (2026, February 9). Center for Hope & Safety.", url: "https://www.hopeandsafetynj.org/" },
  { name: "Jewish Family & Children's Services of Northern NJ", citation: "Home | Jewish Family and Children's Services. (n.d.). Jewish Family and Children's Services of Northern New Jersey.", url: "https://www.jfcsnnj.org/" },
  { name: "United Way of Northern New Jersey", citation: "Home | United Way of Northern New Jersey. (n.d.). United Way of NNJ.", url: "https://www.unitedwaynnj.org/" },
  { name: "Vantage Health System", citation: "Home - Vantage Health System. (2025, December 29). Vantage Health System.", url: "https://vantagenj.org/" },
  { name: "Eva's Village", citation: "homepage. (n.d.). EVA'S VILLAGE.", url: "https://www.evasvillage.org/" },
  { name: "Housing Authority of Bergen County", citation: "Housing Authority of Bergen County. (n.d.). Housing Authority of Bergen County.", url: "https://habcnj.org/" },
  { name: "Meals on Wheels North Jersey", citation: "Meals On Wheels North Jersey. (2026, March 30). Meals on Wheels North Jersey | Delivering for Bergen County.", url: "https://mealsonwheelsnorthjersey.org/" },
  { name: "North Jersey Friendship House – Project SEARCH", citation: "North Jersey Friendship House. (2025, May 8). Project SEARCH - North Jersey Friendship House.", url: "https://njfriendshiphouse.org/programs-services/project-search/" },
  { name: "The Food Brigade", citation: "The Food Brigade Inc. (n.d.). The Food Brigade.", url: "https://foodbrigade.org" },
  { name: "Valley Health System", citation: "Valley Health System. (n.d.).", url: "https://www.valleyhealth.com/" },
  { name: "Bergen Volunteers", citation: "Volunteer | Bergen Volunteers | United States. (n.d.). Bergen Volunteers.", url: "https://bergenvolunteers.org/" },
  { name: "Center for Food Action", citation: "Welcome to Center for Food Action - Center for Food Action - non profit in New Jersey. (2026, March 30). Center for Food Action - Non Profit in New Jersey.", url: "https://cfanj.org/" },
  { name: "YWCA Northern New Jersey", citation: "YWCA Northern New Jersey – Eliminating racism. Empowering Women. (n.d.).", url: "https://ywcannj.org/" },
];

const IMAGE_CITATIONS = [
  { author: "Abootalebi, Nastuh", date: "2026, March 2", desc: "Architectural photography of black and brown hallway photo.", url: "https://unsplash.com/photos/architectural-photography-of-black-and-brown-hallway-ZtC4_rPCRXA" },
  { author: "Aceron, Eiliv", date: "2026, March 2", desc: "Burger with lettuce and tomato photo.", url: "https://unsplash.com/photos/burger-with-lettuce-and-tomato-uBigm8w_MpA" },
  { author: "Borba, Jonathan", date: "2026, March 2", desc: "Person in gray long sleeve shirt holding black tablet computer photo.", url: "https://unsplash.com/photos/person-in-gray-long-sleeve-shirt-holding-black-tablet-computer-v_2FRXEba94" },
  { author: "CDC", date: "2026, March 2", desc: "A doctor checking the blood of a patient photo.", url: "https://unsplash.com/photos/a-doctor-checking-the-blood-of-a-patient-7uSvaBY69d0" },
  { author: "Dominguez de Gouveia, Martha", date: "2026, March 2", desc: "White concrete counter stand photo.", url: "https://unsplash.com/photos/white-concrete-counter-stand-nMyM7fxpokE" },
  { author: "Element5 Digital", date: "2026, March 2", desc: "Red apple fruit on four pyle books photo.", url: "https://unsplash.com/photos/red-apple-fruit-on-four-pyle-books-OyCl7Y4y0Bk" },
  { author: "Flaticon", date: "n.d.", desc: "Multiple interface icons used throughout the website were sourced from Flaticon for educational, noncommercial use under the platform's applicable license terms. Due to the volume of icons used, individual icon-level attribution metadata was not retained during development.", url: "https://www.flaticon.com/" },
  { author: "M., Christina", date: "2026, March 2", desc: "Woman on focus photography photo.", url: "https://unsplash.com/photos/woman-on-focus-photography-SJvDxw0azqw" },
  { author: "Muniz, Joel", date: "2026, March 2", desc: "Woman in white t-shirt and blue denim jeans sitting on brown cardboard photo.", url: "https://unsplash.com/photos/woman-in-white-t-shirt-and-blue-denim-jeans-sitting-on-brown-cardboard-box-A4Ax1ApccfA" },
  { author: "National Cancer Institute", date: "2026, March 2", desc: "Person sitting while using laptop computer and green stethoscope near photo.", url: "https://unsplash.com/photos/person-sitting-while-using-laptop-computer-and-green-stethoscope-near-NFvdKIhxYlU" },
  { author: "Rmah, Larm", date: "2026, March 2", desc: "Five children smiling while doing peace hand sign photo.", url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800" },
  { author: "Spratt, Annie", date: "2026, March 2", desc: "Men sitting in front of their laptop computer photo.", url: "https://unsplash.com/photos/men-sitting-in-front-of-their-laptop-computer-MChSQHxGZrQ" },
];

type PdfDoc = { label: string; src: string; icon: string };

const PDF_DOCS: PdfDoc[] = [
  { label: "Work Log", src: "/work-log.pdf", icon: "/icons/exam.png" },
  { label: "Copyright Checklist", src: "/copyright-checklist.pdf", icon: "/icons/accuracy.png" },
];

export default function ReferencesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"web" | "images" | "docs">("web");
  const [activePdf, setActivePdf] = useState<PdfDoc>(PDF_DOCS[0]);

  useEffect(() => { setIsVisible(true); }, []);

  return (
    <div className="min-h-screen bg-beige">
      {/* Hero */}
      <div className={`bg-gradient-to-r from-forest-dark to-forest-medium text-white py-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="section-container">
          <h1 className="text-5xl font-bold mb-4">References</h1>
          <p className="text-xl text-mint">Citations, documentation, and project records for BergenConnect</p>
        </div>
      </div>

      <div className="section-container py-10">
        {/* Tab Bar */}
        <div className={`flex flex-wrap gap-2 mb-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {[
            { key: "web", label: "Web Resources" },
            { key: "images", label: "Image Citations" },
            { key: "docs", label: "Project Documents" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as typeof activeTab)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 border ${
                activeTab === key
                  ? "bg-forest-dark text-white border-forest-dark shadow-md"
                  : "bg-white text-neutral-dark border-neutral-light/30 hover:border-forest-medium"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Web Resources */}
        {activeTab === "web" && (
          <div className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-neutral-light/20 bg-mint-bg">
                <h2 className="text-lg font-bold text-forest-dark">Web Resources ({WEB_RESOURCES.length})</h2>
                <p className="text-sm text-neutral-medium mt-0.5">All organizations and services referenced in this project</p>
              </div>
              <ol className="divide-y divide-neutral-light/15">
                {WEB_RESOURCES.map((ref, i) => (
                  <li key={i} className="px-6 py-4 flex items-start gap-4 hover:bg-mint-bg/40 transition-colors">
                    <span className="text-xs font-bold text-neutral-light w-6 flex-shrink-0 mt-1">{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-neutral-dark leading-relaxed">
                        {ref.citation}{" "}
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-forest-medium hover:text-forest-dark underline underline-offset-2 break-all"
                        >
                          {ref.url}
                        </a>
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* Image Citations */}
        {activeTab === "images" && (
          <div className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-4">
              <div className="px-6 py-4 border-b border-neutral-light/20 bg-mint-bg">
                <h2 className="text-lg font-bold text-forest-dark">Image Citations (Licensed under the Unsplash License)</h2>
                <p className="text-sm text-neutral-medium mt-0.5">All photos sourced from Unsplash or Flaticon under their respective free-use licenses</p>
              </div>
              <ol className="divide-y divide-neutral-light/15">
                {IMAGE_CITATIONS.map((ref, i) => (
                  <li key={i} className="px-6 py-4 flex items-start gap-4 hover:bg-mint-bg/40 transition-colors">
                    <span className="text-xs font-bold text-neutral-light w-6 flex-shrink-0 mt-1">{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-neutral-dark leading-relaxed">
                        {ref.author}. ({ref.date}). <em>{ref.desc}</em>{" "}
                        {ref.url && (
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-forest-medium hover:text-forest-dark underline underline-offset-2 break-all"
                          >
                            {ref.url}
                          </a>
                        )}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* Project Documents */}
        {activeTab === "docs" && (
          <div className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {/* Doc selector */}
            <div className="flex gap-3 mb-6">
              {PDF_DOCS.map((doc) => (
                <button
                  key={doc.src}
                  onClick={() => setActivePdf(doc)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 border shadow-sm ${
                    activePdf.src === doc.src
                      ? "bg-forest-dark text-white border-forest-dark"
                      : "bg-white text-neutral-dark border-neutral-light/30 hover:border-forest-medium"
                  }`}
                >
                  <img src={doc.icon} alt="" className="w-5 h-5 object-contain" />
                  {doc.label}
                </button>
              ))}
            </div>

            {/* PDF embed */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-neutral-light/20 bg-mint-bg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={activePdf.icon} alt="" className="w-6 h-6 object-contain" />
                  <h2 className="text-lg font-bold text-forest-dark">{activePdf.label}</h2>
                </div>
                <a
                  href={activePdf.src}
                  download
                  className="flex items-center gap-1.5 text-sm font-semibold text-forest-medium hover:text-forest-dark transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </div>
              <div className="w-full" style={{ height: "820px" }}>
                <iframe
                  src={activePdf.src}
                  className="w-full h-full border-0"
                  title={activePdf.label}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

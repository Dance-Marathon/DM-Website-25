import NewHope1 from "../assets/images/researchpics/NewHope/NewHope1.jpg";
import NewHope2 from "../assets/images/researchpics/NewHope/NewHope2.jpg";

import EarlyDetection1 from "../assets/images/researchpics/EarlyDetection/EarlyDetection1.jpg";
import EarlyDetection2 from "../assets/images/researchpics/EarlyDetection/EarlyDetection2.jpg";

const researchData = [
  {
    id: 1,
    linkName: "early-detection-of-type-1-diabetes",
    title: "Early Detection of Type 1 Diabetes",
    date: "February 10, 2026",
    heroImage: EarlyDetection1,
    images: [EarlyDetection2],
    content: [
      "UF scientists have potentially found an early clue in how Type 1 Diabetes begins. They found that small clusters of insulin-producing cells begin to stop functioning long before symptoms of Type 1 Diabetes appear. This insight opens the door for earlier detection and the possibility of delaying or even preventing the disease, which is most often diagnosed in childhood.",
    ],
    externalLink:
      "https://ufhealth.org/news/2025/researchers-find-vital-clue-in-the-progression-of-type-1-diabetes",
  },
  {
    id: 2,
    linkName: "new-hope-in-cancer-treatment",
    title: "New Hope in Cancer Treatment",
    date: "February 10, 2026",
    heroImage: NewHope1,
    images: [NewHope2],
    content: [
      "UF researchers found that mRNA vaccine technology may help the immune system fight cancer better. In a study they conducted, they found that cancer patients who received an mRNA vaccine soon after starting treatment had better outcomes than those who did not. The vaccine appeared to help “wake up” the immune system so it could better find and attack cancer cells. These early findings suggest this approach could one day help treat many types of cancer, including childhood cancers.",
    ],
    externalLink:
      "https://ufhealth.org/news/2025/study-finds-covid-19-mrna-vaccine-sparks-immune-response-to-fight-cancer",
  },
];

export default researchData;

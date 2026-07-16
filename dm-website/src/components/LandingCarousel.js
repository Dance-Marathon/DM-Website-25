import React from 'react';
import { Box} from '@mui/material';

import Sponsor1 from "../assets/images/sponsors/Sponsor (1).png";
import Sponsor2 from "../assets/images/sponsors/Sponsor (2).png";
import Sponsor3 from "../assets/images/sponsors/Sponsor (3).png";
import Sponsor4 from "../assets/images/sponsors/Sponsor (4).png";
import Sponsor5 from "../assets/images/sponsors/Sponsor (5).png";
import Sponsor6 from "../assets/images/sponsors/Sponsor (6).png";
import Sponsor7 from "../assets/images/sponsors/Sponsor (7).png";
import Sponsor8 from "../assets/images/sponsors/Sponsor (8).png";
import Sponsor9 from "../assets/images/sponsors/Sponsor (9).png";
import Sponsor10 from "../assets/images/sponsors/Sponsor (10).png";
import Sponsor11 from "../assets/images/sponsors/Sponsor (11).png";
import Sponsor12 from "../assets/images/sponsors/Sponsor (12).png";
import Sponsor13 from "../assets/images/sponsors/Sponsor (13).png";
import Sponsor14 from "../assets/images/sponsors/Sponsor (14).png";
import Sponsor15 from "../assets/images/sponsors/Sponsor (15).png";
import Sponsor16 from "../assets/images/sponsors/Sponsor (16).png";
import Sponsor17 from "../assets/images/sponsors/Sponsor (17).png";
import Sponsor18 from "../assets/images/sponsors/Sponsor (18).png";
import Sponsor19 from "../assets/images/sponsors/Sponsor (19).png";
import Sponsor20 from "../assets/images/sponsors/Sponsor (20).png";
import Sponsor21 from "../assets/images/sponsors/Sponsor (21).png";
import Sponsor22 from "../assets/images/sponsors/Sponsor (22).png";
import Sponsor23 from "../assets/images/sponsors/Sponsor (23).png";
import Sponsor24 from "../assets/images/sponsors/Sponsor (24).png";
import Sponsor25 from "../assets/images/sponsors/Sponsor (25).png";
import Sponsor26 from "../assets/images/sponsors/Sponsor (26).png";
import Sponsor27 from "../assets/images/sponsors/Sponsor (27).png";
import Sponsor28 from "../assets/images/sponsors/Sponsor (28).png";
import Sponsor29 from "../assets/images/sponsors/Sponsor (29).png";
import Sponsor30 from "../assets/images/sponsors/Sponsor (30).png";
import Sponsor31 from "../assets/images/sponsors/Sponsor (31).png";
import Sponsor32 from "../assets/images/sponsors/Sponsor (32).png";
import Sponsor33 from "../assets/images/sponsors/Sponsor (33).png";
import Sponsor34 from "../assets/images/sponsors/Sponsor (34).png";
import Sponsor35 from "../assets/images/sponsors/Sponsor (35).png";
import Sponsor36 from "../assets/images/sponsors/Sponsor (36).png";
import Sponsor37 from "../assets/images/sponsors/Sponsor (37).png";
import Sponsor38 from "../assets/images/sponsors/Sponsor (38).png";
import Sponsor39 from "../assets/images/sponsors/Sponsor (39).png";
import Sponsor40 from "../assets/images/sponsors/Sponsor (40).png";
import Sponsor41 from "../assets/images/sponsors/Sponsor (41).png";
import Sponsor42 from "../assets/images/sponsors/Sponsor (42).png";
import Sponsor43 from "../assets/images/sponsors/Sponsor (43).png";
import Sponsor44 from "../assets/images/sponsors/Sponsor (44).png";
import Sponsor45 from "../assets/images/sponsors/Sponsor (45).png";
import Sponsor46 from "../assets/images/sponsors/Sponsor (46).png";

const images = [
  { src: Sponsor1 },
  { src: Sponsor2 },
  { src: Sponsor3 },
  { src: Sponsor4 },
  { src: Sponsor5 },
  { src: Sponsor6 },
  { src: Sponsor7 },
  { src: Sponsor8 },
  { src: Sponsor9 },
  { src: Sponsor10 },
  { src: Sponsor11 },
  { src: Sponsor12 },
  { src: Sponsor13 },
  { src: Sponsor14 },
  { src: Sponsor15 },
  { src: Sponsor16 },
  { src: Sponsor17 },
  { src: Sponsor18 },
  { src: Sponsor19 },
  { src: Sponsor20 },
  { src: Sponsor21 },
  { src: Sponsor22 },
  { src: Sponsor23 },
  { src: Sponsor24 },
  { src: Sponsor25 },
  { src: Sponsor26 },
  { src: Sponsor27 },
  { src: Sponsor28 },
  { src: Sponsor29 },
  { src: Sponsor30 },
  { src: Sponsor31 },
  { src: Sponsor32 },
  { src: Sponsor33 },
  { src: Sponsor34 },
  { src: Sponsor35 },
  { src: Sponsor36 },
  { src: Sponsor37 },
  { src: Sponsor38 },
  { src: Sponsor39 },
  { src: Sponsor40 },
  { src: Sponsor41 },
  { src: Sponsor42 },
  { src: Sponsor43 },
  { src: Sponsor44 },
  { src: Sponsor45 },
  { src: Sponsor46 },
];

  
const LandingCarousel = () => {
    return (
      <Box
        sx={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          width: '100%',
          mt: 4,
          position: 'relative',
          marginBottom: 4,
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            animation: 'scroll 100s linear infinite',
            minWidth: `${images.length * 230 * 2}px`,
          }}
        >
          {images.concat(images).map((image, index) => (
            <Box
              key={index}
              sx={{
                width: 200,
                height: 120,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mx: 2,
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src={image.src}
                alt={`Sponsor ${index + 1}`}
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          ))}
        </Box>
  
        {/* Animation Keyframes */}
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </Box>
    );
};

export default LandingCarousel;

import React from "react";
import MainBanner from "../components/home-section/MainBanner.js";
// import Carousel from "../components/carousel";
import CarouselBanner from "../components/home-section/CarouselBanner.js";
import CardService from "../components/home-section/CardService.js";
import MarketBanner from "../components/home-section/MarketBanner.js";
import DragSlider from "../components/home-section/DragSlider.js";
import BannerContent from "../components/home-section/BannerContent.js";
// import { Item, ExtraInfo, } from "../style-components/carouselStyle";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { IoIosArrowDown } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import GKBIM_Model from "../asset/image/gkbim_model.webp";
import LazyImage from '../components/loader/LazyImage';
import { Container } from '@mui/material';
import SIC_Image_1 from '../asset/image/sci-1.webp';
import SIC_Image_2 from '../asset/image/sci-2.webp';
import SIC_Image_3 from '../asset/image/sci-3.webp'

function LandingPage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="gk__landing_page" >
      <MainBanner />
      <CarouselBanner />
      <CardService />
      <Container>
      <div className='service_img_content'>
          <div className='sic_header'>
            <h1 className='sic_title'>MEPF Design & BIM Engineering Services</h1>
            <p className='sic_text'>MEPF Design & BIM Engineering team comprises of highly experienced engineers who provide design and BIM services for various building systems. The team specializes in HVAC, electrical, ELV, plumbing, and firefighting systems.</p>
            <ul className='sic_title_box'>
              <li>MECHANICAL ENGINEERING</li>
              <li>ELECTRICAL ENGINEERING</li>
              <li>FIRE FIGHTING ENGINEERING</li>
              <li>PUBLIC HEALTH ENGINEERING</li>
            </ul>
          </div>
          <div className='sic_card_contain'>
            <div className='sic_card_box'>
              <div className='sic_card'>
                <LazyImage actualImageSrc={SIC_Image_1} Alt="sic_1" />
                <h1 className='sic_card_title'>DESIGN & CALCULATION EXPERTISE</h1>
                <ul className='sic_card_list'>
                  <li><span><GiCheckMark /></span><span>HVAC Design (Heating & Cooling, Load & Ventilation)</span></li>
                  <li><span><GiCheckMark /></span><span>Electrical (Lighting & Power)</span></li>
                  <li><span><GiCheckMark /></span><span>Plumbing (Pipe sizing & Vent routing)</span></li>
                  <li><span><GiCheckMark /></span><span>Fire Fighting (Sprinkler Systems & Hydraulic calculations)</span></li>
                </ul>
              </div>
            </div>
            <div className='sic_card_box'>
              <div className='sic_card'>
                <LazyImage actualImageSrc={SIC_Image_2} Alt="sic_1" />
                <h1 className='sic_card_title'>BIM ENGINEERING EXPERTISE</h1>
                <ul className='sic_card_list'>
                  <li><span><GiCheckMark /></span><span>LOD 100 to 500</span></li>
                  <li><span><GiCheckMark /></span><span>Scan to BIMParametric and non-parametric family creation</span></li>
                  <li><span><GiCheckMark /></span><span>Riser & Isometric risers</span></li>
                  <li><span><GiCheckMark /></span><span>COBie Data</span></li>
                  <li><span><GiCheckMark /></span><span>Template creation/ Project set-up</span></li>
                </ul>
              </div>
            </div>
            <div className='sic_card_box'>
              <div className='sic_card'>
                <LazyImage actualImageSrc={SIC_Image_3} Alt="sic_1" />
                <h1 className='sic_card_title'>COORDINATED MODEL EXPERTISE</h1>
                <ul className='sic_card_list'>
                  <li><span><GiCheckMark /></span><span>Clash Detection and Resolution</span></li>
                  <li><span><GiCheckMark /></span><span>Reduced Rework and Change Orders</span></li>
                  <li><span><GiCheckMark /></span><span>Improved Design Accuracy</span></li>
                  <li><span><GiCheckMark /></span><span>Compliance and Documentation</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className='service_modeling' style={{ backgroundImage: `url(${GKBIM_Model})` }}>
        <div className='sm_content_box'>
          <div className='sm_card'>
            <h1 className='sm_title'>2D - MODELING</h1>
            <ul className='sm_list'>
              <li><span><GiCheckMark /></span><span>Technical Illustrations</span></li>
              <li><span><GiCheckMark /></span><span>CAD Drafting</span></li>
              <li><span><GiCheckMark /></span><span>GIS Mapping</span></li>
              <li><span><GiCheckMark /></span><span>Electrical and Plumbing Layouts</span></li>
            </ul>
          </div>
          <div className='sm_card'>
            <h1 className='sm_title'>3D - MODELING</h1>
            <ul className='sm_list'>
              <li><span><GiCheckMark /></span><span>Constructability Studies</span></li>
              <li><span><GiCheckMark /></span><span>Drawing / Document Extraction</span></li>
              <li><span><GiCheckMark /></span><span>Clash / Conflict Detection & Resolutions</span></li>
              <li><span><GiCheckMark /></span><span>Presentation Materials</span></li>
            </ul>
          </div>
        </div>
      </div>
      <Container maxWidth={'lg'}>
        <div className='service_accordion'>
          <div className='sa_heading'>
            <h1 className='sa_title'>Benefits with GKBIM</h1>
            <p className='sa_text'>Transformations in client outcomes resulting from the utilization of BIM Consultancy Services include</p>
          </div>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown style={{ fontSize: '22px' }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>
                IMPROVED COLLABORATION
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                GKBIM features multiple teams specializing in diverse disciplines such as Architecture, Interiors, MEPF, and Civil & Structure, enabling concurrent collaboration on a project with improved design synergy within the organization
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown style={{ fontSize: '22px' }} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography>BETTER DESIGN INSIGHT</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                GKBIM teams craft virtual models, providing clients' design teams with advanced design insights through in-process visualization and analysis.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown style={{ fontSize: '22px' }} />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography>
                ALL STAGES
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                GKBIM is equipped to meet clients' requirements across the entire building life cycle—from pre-design to construction documentation, and from the bid stage to building operations
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown style={{ fontSize: '22px' }} />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography>CLASH DETECTION</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The GKBIM team performs routine clash and conflict detection checks across various disciplines during the modeling and documentation stages. This aids clients in resolving conflicts and developing cohesive models and documents
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown style={{ fontSize: '22px' }} />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography>TIME & COST</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Employing GKBIM services enables clients to streamline the resolution of conflicts and reduce changes during the construction stage, leading to notable time and cost savings
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown style={{ fontSize: '22px' }} />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography>CLOUD ABILITY | BIM 360</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                As GKBIM is compatible with BIM 360, diverse teams across various locations can collaborate on the same project seamlessly, ensuring no loss of information.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
      <MarketBanner />
      <DragSlider />
      <BannerContent />
    </div>
  )
}

export default LandingPage


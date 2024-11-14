import React from 'react'
import './faq.css'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faq = () => {
  return (
    <div id="faqContainer">
        <h3 id="faq">FAQ</h3>
        <div id="faqAccordion">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    sx={{
                        backgroundColor: " 	#93b7b2"
                      }}
                >
                    What is PLM?
                </AccordionSummary>
                <AccordionDetails>
                    Answer: Product Lifecycle Management (PLM) is a system for managing the entire lifecycle of a product from its initial concept through design and manufacturing to service and disposal. It helps businesses streamline processes, improve collaboration, and ensure efficient product development.
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    sx={{
                        backgroundColor: " 	#93b7b2"
                      }}
                >
                    Why should my company use a PLM system?
                </AccordionSummary>
                <AccordionDetails>
                Answer: A PLM system helps improve product quality, accelerate time-to-market, reduce costs, and increase collaboration across teams. It ensures better management of product data, documentation, and processes, ultimately leading to more innovative and successful products.
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    sx={{
                        backgroundColor: " 	#93b7b2"
                      }}
                >
                    How can PLM improve my product development process?
                </AccordionSummary>
                <AccordionDetails>
                Answer: PLM centralizes all product-related information in one platform, enabling better communication, real-time collaboration, and easy access to critical data. This improves decision-making, reduces errors, and helps teams work more efficiently, leading to faster and more cost-effective product development.
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    sx={{
                        backgroundColor: " 	#93b7b2"
                      }}
                >
                    Is PLM suitable for all industries?
                </AccordionSummary>
                <AccordionDetails>
                Answer: Yes, PLM is versatile and can be customized for various industries such as automotive, aerospace, manufacturing, electronics, and consumer goods. It helps companies across sectors manage their product development and lifecycle more effectively.
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    sx={{
                        backgroundColor: " 	#93b7b2"
                      }}
                >
                    What is the cost of implementing a PLM system?
                </AccordionSummary>
                <AccordionDetails>
                Answer: The cost of implementing a PLM system varies based on the size of your organization, the complexity of your processes, and the features you require. It typically involves initial setup costs, training, and ongoing support. However, the investment can lead to significant long-term savings through improved efficiency and reduced errors.
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
  )
}

export default faq

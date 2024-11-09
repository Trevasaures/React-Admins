import { Box, Typography, useTheme } from '@mui/material';
import Header from '../../components/header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions" />

            {/* Accordion 1 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandedIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                        What to do if I lost my password?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Please contact our support team to reset your password. They will aid you in recovering your account.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Accordion 2 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandedIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                        How do I add a new user?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To add a new user, navigate to the Team page and click on the "Add User" button. Fill in the required information and click "Save".
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Accordion 3 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandedIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                        How do I make some homemade vanilla ice cream?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To make homemade vanilla ice cream, you will need the following ingredients: 2 cups of heavy cream, 1 cup of whole milk, 3/4 cup of sugar, 1 tablespoon of vanilla extract. Mix all the ingredients together and pour them into an ice cream maker. Let it churn for 25-30 minutes or until it reaches the desired consistency.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Accordion 4 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandedIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                        What is the first thing I must do when filing taxes?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The first thing you must do when filing taxes is to gather all the necessary documents. This includes your W-2, 1099, and any other relevant forms. Once you have all the documents, you can start filling out your tax return.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Accordion 5 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandedIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                        What is the most import rule regarding cyber security?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The most important rule regarding cyber security is to never share your password with anyone. Your password is the key to your personal information, and sharing it can lead to unauthorized access to your accounts.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Accordion 6 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandedIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                        How do I get a second date?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To get a second date, be yourself and show genuine interest in the other person. Ask questions, listen actively, and be respectful. If the first date went well, ask the person out again.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;

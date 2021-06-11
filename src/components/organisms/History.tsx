/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-types */
import React, { VFC } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useParams } from 'react-router';
import { histories } from 'data/places';
import CategoryTitle from 'components/molecules/CategoryTitle';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

const History: VFC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<number | false>(false);
  const { placeCode } = useParams<{ placeCode: string }>();
  const lists = histories[placeCode];

  const handleChange = (panel: number) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean,
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <CategoryTitle title="History" />
      <div className={classes.root}>
        {lists.map((list) => (
          <Accordion
            expanded={expanded === list.id}
            onChange={handleChange(list.id)}
            key={list.id}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${list.id}`}
              id={`${list.id}`}
            >
              <Typography className={classes.heading}>{list.date}</Typography>
              <Typography className={classes.secondaryHeading}>
                {list.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{list.desc}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default History;

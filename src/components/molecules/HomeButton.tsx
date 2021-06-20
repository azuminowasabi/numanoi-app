import { VFC } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';

const HomeButton: VFC<{ redirectToHome?: () => void }> = ({
  redirectToHome = () => undefined,
}) => (
  <IconButton onClick={redirectToHome} aria-label="home">
    <ArrowBackIcon fontSize="large" name="home" color="secondary" />
  </IconButton>
);
export default HomeButton;

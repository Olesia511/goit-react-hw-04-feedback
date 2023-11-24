import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ updateBad, updateNeutral, updateGood }) => {
  return (
    <>
      <Button
        type="button"
        onClick={() => {
          updateGood();
        }}
      >
        {'Good'}
      </Button>

      <Button
        type="button"
        onClick={() => {
          updateNeutral();
        }}
      >
        {'Neutral'}
      </Button>

      <Button
        type="button"
        onClick={() => {
          updateBad();
        }}
      >
        {'Bad'}
      </Button>
    </>
  );
};

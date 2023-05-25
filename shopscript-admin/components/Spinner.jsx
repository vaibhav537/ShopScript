import { ProgressBar } from "react-loader-spinner";

export default function Spinner() {
  return (
<ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#fff'
  barColor = '#bfbfbf'
/>
  );
}

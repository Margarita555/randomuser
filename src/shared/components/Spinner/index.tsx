import { HourglassOutlined } from "@ant-design/icons";
import { StyledSpinner } from "./styles";

const antIcon = <HourglassOutlined spin style={{ fontSize: 32, color: "#48d1cc" }} />;

const Spinner = () => <StyledSpinner indicator={antIcon} />;

export default Spinner;

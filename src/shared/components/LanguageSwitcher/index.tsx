import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GlobeImage, EnFlag, UaFlag } from "../../../assets";
import { StyledSwitcher, StyledButton } from "./styles";

const lngs = [
  {
    code: "en",
    icon: EnFlag,
  },
  {
    code: "uk",
    icon: UaFlag,
  },
];

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [isSwitcherOpen, setIsSwitcherOpen] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.setAttribute("lang", i18n.resolvedLanguage);
  }, [t, i18n.resolvedLanguage]);

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsSwitcherOpen(false);
  };

  return (
    <StyledSwitcher>
      <div onClick={() => setIsSwitcherOpen(!isSwitcherOpen)}>
        <img src={GlobeImage} alt="globe" width={22} />
      </div>
      {isSwitcherOpen && (
        <ul>
          {lngs.map(({ code, icon }) => (
            <li key={code}>
              <StyledButton type="button" onClick={() => handleLanguageChange(code)} active={`${i18n.resolvedLanguage === code ? "active" : ""}`}>
                <img src={icon} alt="flag" />
                <span>{t(code)}</span>
              </StyledButton>
            </li>
          ))}
        </ul>
      )}
    </StyledSwitcher>
  );
};

export default LanguageSwitcher;

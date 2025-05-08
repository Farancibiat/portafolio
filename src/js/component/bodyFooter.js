// import { checkPropTypes } from "prop-types";
import React from "react";
import { useTranslations } from "../context/LanguageContext";

// import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";

// import { LinkContainer } from "react-router-bootstrap";

export const BodyFooter = () => {
	// const { store, actions } = useContext(Context);
	const { t } = useTranslations();

    return(
        <>
        <div className="botSideBar text-center footer mt-auto py-3 mb-0">
        <p className="text-light mb-0">{t('footer.copyrightText')}</p>
        </div>
        </>
    );
};
export default BodyFooter;
import React from "react";
import { useTranslations } from "../store/LanguageContext";


export const BodyFooter = () => {
	const { t } = useTranslations();

    return(
        <>
        <div className="content-footer text-center footer mt-auto py-3 mb-0">
        <p className="text-light mb-0">{t('footer.copyrightText')}</p>
        </div>
        </>
    );
};
export default BodyFooter;
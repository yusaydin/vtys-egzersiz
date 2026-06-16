/*SELECT UrunAd, MarkaAd
FROM urun LEFT OUTER JOIN marka
ON urun.MarkaNo = marka.MarkaNo*/
/*SELECT UrunAd, MarkaAd
FROM marka LEFT OUTER JOIN urun
ON urun.MarkaNo = marka.MarkaNo */
/*SELECT UrunAd, MarkaAd
FROM urun RIGHT OUTER JOIN marka
ON urun.MarkaNo = marka.MarkaNo*/
SELECT UrunAd, MarkaAd
FROM marka RIGHT OUTER JOIN urun
ON urun.MarkaNo = marka.MarkaNo
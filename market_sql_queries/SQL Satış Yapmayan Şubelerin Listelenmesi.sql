-- Satış Yapmayan şubelerin listelenmesi
SELECT SU.SubeNo,S.SubeNo,SU.Ad FROM satis AS S
RIGHT JOIN sube AS SU
ON S.SubeNo = SU.SubeNo
WHERE S.SubeNo IS NULL


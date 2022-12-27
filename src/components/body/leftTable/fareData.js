export const stops = [{"stop_id":"ALVA","stop_name":"Aluva","stop_lat":"10.1099","stop_lon":"76.3495","zone_id":"ALVA","wheelchair_boarding":"1"},
{"stop_id":"PNCU","stop_name":"Pulinchudu","stop_lat":"10.0951","stop_lon":"76.3466","zone_id":"PNCU","wheelchair_boarding":"1"},
{"stop_id":"CPPY","stop_name":"CompanyPady","stop_lat":"10.0873","stop_lon":"76.3428","zone_id":"CPPY","wheelchair_boarding":"1"},
{"stop_id":"ATTK","stop_name":"Ambattukavu","stop_lat":"10.0793","stop_lon":"76.3389","zone_id":"ATTK","wheelchair_boarding":"1"},
{"stop_id":"MUTT","stop_name":"Muttom","stop_lat":"10.0727","stop_lon":"76.3336","zone_id":"MUTT","wheelchair_boarding":"1"},
{"stop_id":"KLMT","stop_name":"Kalamassery","stop_lat":"10.0586","stop_lon":"76.322","zone_id":"KLMT","wheelchair_boarding":"1"},
{"stop_id":"CCUV","stop_name":"Cusat","stop_lat":"10.0467","stop_lon":"76.3182","zone_id":"CCUV","wheelchair_boarding":"1"},
{"stop_id":"PDPM","stop_name":"Pathadipalam","stop_lat":"10.0361","stop_lon":"76.3144","zone_id":"PDPM","wheelchair_boarding":"1"},
{"stop_id":"EDAP","stop_name":"Edapally Jn.","stop_lat":"10.0251","stop_lon":"76.3083","zone_id":"EDAP","wheelchair_boarding":"1"},
{"stop_id":"CGPP","stop_name":"Changampuzha Park","stop_lat":"10.0152","stop_lon":"76.3023","zone_id":"CGPP","wheelchair_boarding":"1"},
{"stop_id":"PARV","stop_name":"Palarivattom","stop_lat":"10.0064","stop_lon":"76.3048","zone_id":"PARV","wheelchair_boarding":"1"},
{"stop_id":"JLSD","stop_name":"JLN Stadium","stop_lat":"10.0002","stop_lon":"76.2989","zone_id":"JLSD","wheelchair_boarding":"1"},
{"stop_id":"KALR","stop_name":"Kaloor","stop_lat":"9.9943","stop_lon":"76.2914","zone_id":"KALR","wheelchair_boarding":"1"},
{"stop_id":"LSSE","stop_name":"Lissie Jn","stop_lat":"9.9914","stop_lon":"76.2884","zone_id":"LSSE","wheelchair_boarding":"1"},
{"stop_id":"MGRD","stop_name":"MG Road","stop_lat":"9.9834","stop_lon":"76.2823","zone_id":"MGRD","wheelchair_boarding":"1"},
{"stop_id":"MACE","stop_name":"Maharaja College","stop_lat":"9.9732","stop_lon":"76.2851","zone_id":"MACE","wheelchair_boarding":"1"},{"stop_id":""}];

export const fare = [{"fare_id":"F1","price":"10","currency_type":"INR","payment_method":"1","transfers":""},
{"fare_id":"F2","price":"20","currency_type":"INR","payment_method":"1","transfers":""},
{"fare_id":"F3","price":"30","currency_type":"INR","payment_method":"1","transfers":""},
{"fare_id":"F4","price":"40","currency_type":"INR","payment_method":"1","transfers":""},
{"fare_id":"F5","price":"50","currency_type":"INR","payment_method":"1","transfers":""},
{"fare_id":""}];

export const fareRules = [{"fare_id":"F1","origin_id":"ALVA","destination_id":"PNCU"},
{"fare_id":"F1","origin_id":"ATTK","destination_id":"CPPY"},
{"fare_id":"F1","origin_id":"ATTK","destination_id":"MUTT"},
{"fare_id":"F1","origin_id":"ATTK","destination_id":"PNCU"},
{"fare_id":"F1","origin_id":"CCUV","destination_id":"KLMT"},
{"fare_id":"F1","origin_id":"CCUV","destination_id":"PDPM"},
{"fare_id":"F1","origin_id":"CGPP","destination_id":"EDAP"},
{"fare_id":"F1","origin_id":"CGPP","destination_id":"PARV"},
{"fare_id":"F1","origin_id":"CPPY","destination_id":"ATTK"},
{"fare_id":"F1","origin_id":"CPPY","destination_id":"PNCU"},
{"fare_id":"F1","origin_id":"EDAP","destination_id":"CGPP"},
{"fare_id":"F1","origin_id":"EDAP","destination_id":"PARV"},
{"fare_id":"F1","origin_id":"EDAP","destination_id":"PDPM"},
{"fare_id":"F1","origin_id":"JLSD","destination_id":"CGPP"},
{"fare_id":"F1","origin_id":"JLSD","destination_id":"KALR"},
{"fare_id":"F1","origin_id":"JLSD","destination_id":"PARV"},
{"fare_id":"F1","origin_id":"KALR","destination_id":"JLSD"},
{"fare_id":"F1","origin_id":"KALR","destination_id":"LSSE"},
{"fare_id":"F1","origin_id":"KLMT","destination_id":"CCUV"},
{"fare_id":"F1","origin_id":"LSSE","destination_id":"JLSD"},
{"fare_id":"F1","origin_id":"LSSE","destination_id":"KALR"},
{"fare_id":"F1","origin_id":"LSSE","destination_id":"MGRD"},
{"fare_id":"F1","origin_id":"MACE","destination_id":"MGRD"},
{"fare_id":"F1","origin_id":"MGRD","destination_id":"KALR"},
{"fare_id":"F1","origin_id":"MGRD","destination_id":"LSSE"},
{"fare_id":"F1","origin_id":"MGRD","destination_id":"MACE"},
{"fare_id":"F1","origin_id":"MUTT","destination_id":"ATTK"},
{"fare_id":"F1","origin_id":"MUTT","destination_id":"CPPY"},
{"fare_id":"F1","origin_id":"MUTT","destination_id":"KLMT"},
{"fare_id":"F1","origin_id":"PARV","destination_id":"CGPP"},
{"fare_id":"F1","origin_id":"PARV","destination_id":"JLSD"},
{"fare_id":"F1","origin_id":"PARV","destination_id":"KALR"},
{"fare_id":"F1","origin_id":"PDPM","destination_id":"CCUV"},
{"fare_id":"F1","origin_id":"PDPM","destination_id":"CGPP"},
{"fare_id":"F1","origin_id":"PDPM","destination_id":"EDAP"},
{"fare_id":"F1","origin_id":"PNCU","destination_id":"ALVA"},
{"fare_id":"F1","origin_id":"PNCU","destination_id":"CPPY"},
{"fare_id":"F2","origin_id":"ALVA","destination_id":"ATTK"},
{"fare_id":"F2","origin_id":"ALVA","destination_id":"CPPY"},
{"fare_id":"F2","origin_id":"ALVA","destination_id":"MUTT"},
{"fare_id":"F2","origin_id":"ATTK","destination_id":"ALVA"},
{"fare_id":"F2","origin_id":"ATTK","destination_id":"CCUV"},
{"fare_id":"F2","origin_id":"ATTK","destination_id":"KLMT"},
{"fare_id":"F2","origin_id":"ATTK","destination_id":"PDPM"},
{"fare_id":"F2","origin_id":"CCUV","destination_id":"ATTK"},
{"fare_id":"F2","origin_id":"CCUV","destination_id":"CGPP"},
{"fare_id":"F2","origin_id":"CCUV","destination_id":"EDAP"},
{"fare_id":"F2","origin_id":"CCUV","destination_id":"JLSD"},
{"fare_id":"F2","origin_id":"CCUV","destination_id":"MUTT"},
{"fare_id":"F2","origin_id":"CCUV","destination_id":"PARV"},
{"fare_id":"F2","origin_id":"CGPP","destination_id":"CCUV"},
{"fare_id":"F2","origin_id":"CGPP","destination_id":"JLSD"},
{"fare_id":"F2","origin_id":"CGPP","destination_id":"KALR"},
{"fare_id":"F2","origin_id":"CGPP","destination_id":"LSSE"},
{"fare_id":"F2","origin_id":"CGPP","destination_id":"PDPM"},
{"fare_id":"F2","origin_id":"CPPY","destination_id":"ALVA"},
{"fare_id":"F2","origin_id":"CPPY","destination_id":"CCUV"},
{"fare_id":"F2","origin_id":"CPPY","destination_id":"KLMT"},
{"fare_id":"F2","origin_id":"CPPY","destination_id":"MUTT"},
{"fare_id":"F2","origin_id":"EDAP","destination_id":"CCUV"},
{"fare_id":"F2","origin_id":"EDAP","destination_id":"JLSD"},
{"fare_id":"F2","origin_id":"EDAP","destination_id":"KALR"},
{"fare_id":"F2","origin_id":"EDAP","destination_id":"KLMT"},
{"fare_id":"F2","origin_id":"EDAP","destination_id":"LSSE"},
{"fare_id":"F2","origin_id":"JLSD","destination_id":"EDAP"},
{"fare_id":"F2","origin_id":"JLSD","destination_id":"LSSE"},
{"fare_id":"F2","origin_id":"JLSD","destination_id":"MACE"},
{"fare_id":"F2","origin_id":"JLSD","destination_id":"MGRD"},
{"fare_id":"F2","origin_id":"JLSD","destination_id":"PDPM"},
{"fare_id":"F2","origin_id":"KALR","destination_id":"CGPP"},
{"fare_id":"F2","origin_id":"KALR","destination_id":"EDAP"},
{"fare_id":"F2","origin_id":"KALR","destination_id":"MACE"},
{"fare_id":"F2","origin_id":"KALR","destination_id":"MGRD"},
{"fare_id":"F2","origin_id":"KALR","destination_id":"PARV"},
{"fare_id":"F2","origin_id":"KLMT","destination_id":"ATTK"},
{"fare_id":"F2","origin_id":"KLMT","destination_id":"CGPP"},
{"fare_id":"F2","origin_id":"KLMT","destination_id":"CPPY"},
{"fare_id":"F2","origin_id":"KLMT","destination_id":"EDAP"},
{"fare_id":"F2","origin_id":"KLMT","destination_id":"MUTT"},
{"fare_id":"F2","origin_id":"KLMT","destination_id":"PARV"},
{"fare_id":"F2","origin_id":"KLMT","destination_id":"PDPM"},
{"fare_id":"F2","origin_id":"KLMT","destination_id":"PNCU"},
{"fare_id":"F2","origin_id":"LSSE","destination_id":"CGPP"},
{"fare_id":"F2","origin_id":"LSSE","destination_id":"EDAP"},
{"fare_id":"F2","origin_id":"LSSE","destination_id":"MACE"},
{"fare_id":"F2","origin_id":"LSSE","destination_id":"PARV"},
{"fare_id":"F2","origin_id":"MACE","destination_id":"JLSD"},
{"fare_id":"F2","origin_id":"MACE","destination_id":"KALR"},
{"fare_id":"F2","origin_id":"MACE","destination_id":"LSSE"},
{"fare_id":"F2","origin_id":"MACE","destination_id":"PARV"},
{"fare_id":"F2","origin_id":"MGRD","destination_id":"CGPP"},
{"fare_id":"F2","origin_id":"MGRD","destination_id":"JLSD"},
{"fare_id":"F2","origin_id":"MGRD","destination_id":"PARV"},
{"fare_id":"F2","origin_id":"MUTT","destination_id":"ALVA"},
{"fare_id":"F2","origin_id":"MUTT","destination_id":"CCUV"},
{"fare_id":"F2","origin_id":"MUTT","destination_id":"CGPP"},
{"fare_id":"F2","origin_id":"MUTT","destination_id":"EDAP"},
{"fare_id":"F2","origin_id":"MUTT","destination_id":"PDPM"},
{"fare_id":"F2","origin_id":"MUTT","destination_id":"PNCU"},
{"fare_id":"F2","origin_id":"PARV","destination_id":"CCUV"},
{"fare_id":"F2","origin_id":"PARV","destination_id":"EDAP"},
{"fare_id":"F2","origin_id":"PARV","destination_id":"LSSE"},
{"fare_id":"F2","origin_id":"PARV","destination_id":"MGRD"},
{"fare_id":"F2","origin_id":"PARV","destination_id":"PDPM"},
{"fare_id":"F2","origin_id":"PDPM","destination_id":"ATTK"},
{"fare_id":"F2","origin_id":"PDPM","destination_id":"JLSD"},
{"fare_id":"F2","origin_id":"PDPM","destination_id":"KALR"},
{"fare_id":"F2","origin_id":"PDPM","destination_id":"KLMT"},
{"fare_id":"F2","origin_id":"PDPM","destination_id":"MUTT"},
{"fare_id":"F2","origin_id":"PDPM","destination_id":"PARV"},
{"fare_id":"F2","origin_id":"PNCU","destination_id":"ATTK"},
{"fare_id":"F2","origin_id":"PNCU","destination_id":"KLMT"},
{"fare_id":"F2","origin_id":"PNCU","destination_id":"MUTT"},
{"fare_id":"F3","origin_id":"ALVA","destination_id":"CCUV"},
{"fare_id":"F3","origin_id":"ALVA","destination_id":"CGPP"},
{"fare_id":"F3","origin_id":"ALVA","destination_id":"EDAP"},
{"fare_id":"F3","origin_id":"ALVA","destination_id":"KLMT"},
{"fare_id":"F3","origin_id":"ALVA","destination_id":"PDPM"},
{"fare_id":"F3","origin_id":"ATTK","destination_id":"CGPP"},
{"fare_id":"F3","origin_id":"ATTK","destination_id":"EDAP"},
{"fare_id":"F3","origin_id":"ATTK","destination_id":"JLSD"},
{"fare_id":"F3","origin_id":"ATTK","destination_id":"KALR"},
{"fare_id":"F3","origin_id":"ATTK","destination_id":"PARV"},
{"fare_id":"F3","origin_id":"CCUV","destination_id":"ALVA"},
{"fare_id":"F3","origin_id":"CCUV","destination_id":"CPPY"},
{"fare_id":"F3","origin_id":"CCUV","destination_id":"KALR"},
{"fare_id":"F3","origin_id":"CCUV","destination_id":"LSSE"},
{"fare_id":"F3","origin_id":"CCUV","destination_id":"MACE"},
{"fare_id":"F3","origin_id":"CCUV","destination_id":"MGRD"},
{"fare_id":"F3","origin_id":"CCUV","destination_id":"PNCU"},
{"fare_id":"F3","origin_id":"CGPP","destination_id":"ATTK"},
{"fare_id":"F3","origin_id":"CGPP","destination_id":"CPPY"},
{"fare_id":"F3","origin_id":"CGPP","destination_id":"KLMT"},
{"fare_id":"F3","origin_id":"CGPP","destination_id":"MACE"},
{"fare_id":"F3","origin_id":"CGPP","destination_id":"MGRD"},
{"fare_id":"F3","origin_id":"CGPP","destination_id":"MUTT"},
{"fare_id":"F3","origin_id":"CPPY","destination_id":"CGPP"},
{"fare_id":"F3","origin_id":"CPPY","destination_id":"EDAP"},
{"fare_id":"F3","origin_id":"CPPY","destination_id":"JLSD"},
{"fare_id":"F3","origin_id":"CPPY","destination_id":"PARV"},
{"fare_id":"F3","origin_id":"CPPY","destination_id":"PDPM"},
{"fare_id":"F3","origin_id":"EDAP","destination_id":"ATTK"},
{"fare_id":"F3","origin_id":"EDAP","destination_id":"CPPY"},
{"fare_id":"F3","origin_id":"EDAP","destination_id":"MACE"},
{"fare_id":"F3","origin_id":"EDAP","destination_id":"MGRD"},
{"fare_id":"F3","origin_id":"EDAP","destination_id":"MUTT"},
{"fare_id":"F3","origin_id":"EDAP","destination_id":"PNCU"},
{"fare_id":"F3","origin_id":"JLSD","destination_id":"CCUV"},
{"fare_id":"F3","origin_id":"JLSD","destination_id":"KLMT"},
{"fare_id":"F3","origin_id":"JLSD","destination_id":"MUTT"},
{"fare_id":"F3","origin_id":"KALR","destination_id":"CCUV"},
{"fare_id":"F3","origin_id":"KALR","destination_id":"KLMT"},
{"fare_id":"F3","origin_id":"KALR","destination_id":"PDPM"},
{"fare_id":"F3","origin_id":"KLMT","destination_id":"ALVA"},
{"fare_id":"F3","origin_id":"KLMT","destination_id":"JLSD"},
{"fare_id":"F3","origin_id":"KLMT","destination_id":"KALR"},
{"fare_id":"F3","origin_id":"KLMT","destination_id":"LSSE"},
{"fare_id":"F3","origin_id":"KLMT","destination_id":"MGRD"},
{"fare_id":"F3","origin_id":"LSSE","destination_id":"CCUV"},
{"fare_id":"F3","origin_id":"LSSE","destination_id":"KLMT"},
{"fare_id":"F3","origin_id":"LSSE","destination_id":"PDPM"},
{"fare_id":"F3","origin_id":"MACE","destination_id":"CCUV"},
{"fare_id":"F3","origin_id":"MACE","destination_id":"CGPP"},
{"fare_id":"F3","origin_id":"MACE","destination_id":"EDAP"},
{"fare_id":"F3","origin_id":"MACE","destination_id":"PDPM"},
{"fare_id":"F3","origin_id":"MGRD","destination_id":"CCUV"},
{"fare_id":"F3","origin_id":"MGRD","destination_id":"EDAP"},
{"fare_id":"F3","origin_id":"MGRD","destination_id":"PDPM"},
{"fare_id":"F3","origin_id":"MUTT","destination_id":"JLSD"},
{"fare_id":"F3","origin_id":"MUTT","destination_id":"KALR"},
{"fare_id":"F3","origin_id":"MUTT","destination_id":"LSSE"},
{"fare_id":"F3","origin_id":"MUTT","destination_id":"PARV"},
{"fare_id":"F3","origin_id":"PARV","destination_id":"ATTK"},
{"fare_id":"F3","origin_id":"PARV","destination_id":"KLMT"},
{"fare_id":"F3","origin_id":"PARV","destination_id":"MACE"},
{"fare_id":"F3","origin_id":"PARV","destination_id":"MUTT"},
{"fare_id":"F3","origin_id":"PDPM","destination_id":"ALVA"},
{"fare_id":"F3","origin_id":"PDPM","destination_id":"CPPY"},
{"fare_id":"F3","origin_id":"PDPM","destination_id":"LSSE"},
{"fare_id":"F3","origin_id":"PDPM","destination_id":"MACE"},
{"fare_id":"F3","origin_id":"PDPM","destination_id":"MGRD"},
{"fare_id":"F3","origin_id":"PDPM","destination_id":"PNCU"},
{"fare_id":"F3","origin_id":"PNCU","destination_id":"CCUV"},
{"fare_id":"F3","origin_id":"PNCU","destination_id":"CGPP"},
{"fare_id":"F3","origin_id":"PNCU","destination_id":"EDAP"},
{"fare_id":"F3","origin_id":"PNCU","destination_id":"PARV"},
{"fare_id":"F3","origin_id":"PNCU","destination_id":"PDPM"},
{"fare_id":"F4","origin_id":"ALVA","destination_id":"JLSD"},
{"fare_id":"F4","origin_id":"ALVA","destination_id":"KALR"},
{"fare_id":"F4","origin_id":"ALVA","destination_id":"LSSE"},
{"fare_id":"F4","origin_id":"ALVA","destination_id":"PARV"},
{"fare_id":"F4","origin_id":"ATTK","destination_id":"LSSE"},
{"fare_id":"F4","origin_id":"ATTK","destination_id":"MACE"},
{"fare_id":"F4","origin_id":"ATTK","destination_id":"MGRD"},
{"fare_id":"F4","origin_id":"CGPP","destination_id":"ALVA"},
{"fare_id":"F4","origin_id":"CGPP","destination_id":"PNCU"},
{"fare_id":"F4","origin_id":"CPPY","destination_id":"KALR"},
{"fare_id":"F4","origin_id":"CPPY","destination_id":"LSSE"},
{"fare_id":"F4","origin_id":"CPPY","destination_id":"MACE"},
{"fare_id":"F4","origin_id":"CPPY","destination_id":"MGRD"},
{"fare_id":"F4","origin_id":"EDAP","destination_id":"ALVA"},
{"fare_id":"F4","origin_id":"JLSD","destination_id":"ALVA"},
{"fare_id":"F4","origin_id":"JLSD","destination_id":"ATTK"},
{"fare_id":"F4","origin_id":"JLSD","destination_id":"CPPY"},
{"fare_id":"F4","origin_id":"JLSD","destination_id":"PNCU"},
{"fare_id":"F4","origin_id":"KALR","destination_id":"ATTK"},
{"fare_id":"F4","origin_id":"KALR","destination_id":"CPPY"},
{"fare_id":"F4","origin_id":"KALR","destination_id":"MUTT"},
{"fare_id":"F4","origin_id":"KALR","destination_id":"PNCU"},
{"fare_id":"F4","origin_id":"KLMT","destination_id":"MACE"},
{"fare_id":"F4","origin_id":"LSSE","destination_id":"ATTK"},
{"fare_id":"F4","origin_id":"LSSE","destination_id":"CPPY"},
{"fare_id":"F4","origin_id":"LSSE","destination_id":"MUTT"},
{"fare_id":"F4","origin_id":"LSSE","destination_id":"PNCU"},
{"fare_id":"F4","origin_id":"MACE","destination_id":"ATTK"},
{"fare_id":"F4","origin_id":"MACE","destination_id":"KLMT"},
{"fare_id":"F4","origin_id":"MACE","destination_id":"MUTT"},
{"fare_id":"F4","origin_id":"MGRD","destination_id":"ATTK"},
{"fare_id":"F4","origin_id":"MGRD","destination_id":"CPPY"},
{"fare_id":"F4","origin_id":"MGRD","destination_id":"KLMT"},
{"fare_id":"F4","origin_id":"MGRD","destination_id":"MUTT"},
{"fare_id":"F4","origin_id":"MUTT","destination_id":"MACE"},
{"fare_id":"F4","origin_id":"MUTT","destination_id":"MGRD"},
{"fare_id":"F4","origin_id":"PARV","destination_id":"ALVA"},
{"fare_id":"F4","origin_id":"PARV","destination_id":"CPPY"},
{"fare_id":"F4","origin_id":"PARV","destination_id":"PNCU"},
{"fare_id":"F4","origin_id":"PNCU","destination_id":"JLSD"},
{"fare_id":"F4","origin_id":"PNCU","destination_id":"KALR"},
{"fare_id":"F4","origin_id":"PNCU","destination_id":"LSSE"},
{"fare_id":"F4","origin_id":"PNCU","destination_id":"MGRD"},
{"fare_id":"F5","origin_id":"ALVA","destination_id":"MACE"},
{"fare_id":"F5","origin_id":"ALVA","destination_id":"MGRD"},
{"fare_id":"F5","origin_id":"KALR","destination_id":"ALVA"},
{"fare_id":"F5","origin_id":"LSSE","destination_id":"ALVA"},
{"fare_id":"F5","origin_id":"MACE","destination_id":"ALVA"},
{"fare_id":"F5","origin_id":"MACE","destination_id":"CPPY"},
{"fare_id":"F5","origin_id":"MACE","destination_id":"PNCU"},
{"fare_id":"F5","origin_id":"MGRD","destination_id":"ALVA"},
{"fare_id":"F5","origin_id":"MGRD","destination_id":"PNCU"},
{"fare_id":"F5","origin_id":"PNCU","destination_id":"MACE"},{"fare_id":""}];
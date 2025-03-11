export const fileFormFields = {
  DEBTOR_DETAILS: [
    { name: 'lawyerFileNumber', label: 'תיק עורך דין', type: 'text' },
    { name: 'debtorName', label: 'שם החייב', type: 'text' },
    { name: 'debtorId', label: 'תז', type: 'text' },
    { name: 'debtorAddress', label: 'כתובת- עיר ורחוב', type: 'text' },
    { name: 'homeNumber', label: 'בית', type: 'text', width: '50%' },
    { name: 'apartmentNumber', label: 'דירה', type: 'text', width: '50%' },
    { name: 'openFileDate', label: 'תאריך פתיחת תיק', type: 'date' },
    { name: 'transferDate', label: 'תאריך העברה לשליח', type: 'date' }
  ],
  MORE_DETAILS :  [
    { name: 'lawyerName', label: 'שם עורך דין', type: 'text' },
    { name: 'clientName', label: 'שם הלקוח', type: 'text' },
    { name: 'courierName', label: 'שם השליח', type: 'text' },
    { name: 'locatorName', label: 'שם המאתר', type: 'text' },
    { name: 'caseType', label: 'סוג', type: 'text' },
    { name: 'status', label: 'סטטוס', type: 'text' },
    { name: 'address', label: 'כתובת שנאמרה לשליח', type: 'text' },
    { name: 'moreInfo', label: 'מידע נוסף', type: 'text' },
  ],
  FILE_CONDITION : [
    { name: 'fileStatus', label: 'סטטוס התיק', type: 'text' },
    { name: 'deliveryDate', label: 'תאריך ביצוע המסירה', type: 'date' },
    { name: 'closeFileDate', label: 'תאריך סגירת תיק', type: 'date' },
    { name: 'invoiceStatus', label: 'סטטוס ח\\ע', type: 'text' },
    { name: 'invoiceNumber', label: 'מספר ח\\ע', type: 'text' },
    { name: 'lawyerFee', label: 'חיוב עו"ד', type: 'text' },
    { name: 'deliveryFee', label: 'תשלום למוסר', type: 'text' },
    { name: 'lateFee', label: 'תשלום למאחר', type: 'text' },
    { name: 'fileOpened', label: 'תיק נפתח', type: 'text' }
  ]
}
export const fileFormTitles = {
  DEBTOR_DETAILS : "פרטי החייב",
  MORE_DETAILS : "פרטים נוספים",
  FILE_CONDITION: "מצב התיק"
}

export const fileFormKeys = {
  DEBTOR_DETAILS: 'DEBTOR_DETAILS',
  MORE_DETAILS: 'MORE_DETAILS',
  FILE_CONDITION: 'FILE_CONDITION',
}



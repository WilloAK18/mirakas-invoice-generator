import { ProductLine, Invoice } from './types'

export const initialProductLine: ProductLine = {
    description: '',
    quantity: '1',
    rate: '0.00',
}

export const initialInvoice: Invoice = {
    name: '',
    companyAddress: '',
    companyAddress2: '',
    companyCountry: 'United States',
    billTo: 'Bill To:',
    clientName: '',
    clientAddress: '',
    clientAddress2: '',
    clientCountry: 'United States',
    invoiceTitleLabel: 'Invoice #',
    invoiceTitle: '',
    invoiceDateLabel: 'Invoice Date',
    invoiceDate: '',
    invoiceDueDateLabel: 'Due Date',
    invoiceDueDate: '',
    productLineDescription: 'Item Description',
    productLineQuantity: 'Qty',
    productLineQuantityRate: 'Rate',
    productLineQuantityAmount: 'Amount',
    productLines: [{ ...initialProductLine }],
    subTotalLabel: 'Sub Total',
    totalLabel: 'TOTAL',
    currency: 'RM',
    notesLabel: 'Notes',
    notes: 'Thank you for choosing MIRAKAS.',
    termLabel: 'Payment Info',
    term: 'MIRAKAS SDN. BHD. \nBank: CIMB\nAccount No.: 8604875282',
}

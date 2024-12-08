export interface Money {
    type: 'expense' | 'income',
    amount: number,
    subType: string,
    colorType: string,
    title: string
}

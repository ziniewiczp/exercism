const codons = new Map([
    ['AUG', 'Methionine'],
    ['UUU', 'Phenylalanine'],
    ['UUC', 'Phenylalanine'],
    ['UUA', 'Leucine'],
    ['UUG', 'Leucine'],
    ['UCU', 'Serine'],
    ['UCC', 'Serine'],
    ['UCA', 'Serine'],
    ['UCG', 'Serine'],
    ['UAU', 'Tyrosine'],
    ['UAC', 'Tyrosine'],
    ['UGU', 'Cysteine'],
    ['UGC', 'Cysteine'],
    ['UGG', 'Tryptophan'],
    ['UAA', 'STOP'],
    ['UAG', 'STOP'],
    ['UGA', 'STOP']
]);   

export const translate = (rna = '') => {
    let protein = [];
    let codon;

    for(let index = 0; index < rna.length; index += 3) {
        codon = codons.get(rna.slice(index, index + 3));
        if (!codon)
            throw new Error('Invalid codon');

        if (codon === 'STOP')
            break;

        protein.push(codon);
    }

    return protein;
}
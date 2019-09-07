const transcriptionMap = new Map([
    ["G", "C"],
    ["C", "G"],
    ["T", "A"],
    ["A", "U"]
]);

export const toRna = (dna) => {
    return dna.replace(/[A-Z]/g, nucleotide => {
        if(!transcriptionMap.has(nucleotide))
            throw new Error(`Invalid nucleotide ${nucleotide} in strand ${dna}`);
        
        return transcriptionMap.get(nucleotide)
    });
}
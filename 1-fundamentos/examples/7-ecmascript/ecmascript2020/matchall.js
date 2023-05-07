const regex = /\b(White)+\b/g;

const colors = 'Red, Green, White, Yellow, Black, White, Grey';
for (const match of colors.matchAll(regex)) {
    console.table(match);
}
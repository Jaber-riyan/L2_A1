{
    //
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === undefined) {
            return input.toUpperCase()
        }
        if (!toUpper) {
            return input.toLowerCase()
        }
        else {
            return input.toUpperCase()
        }
    }

    // 
    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        const filteredItems = items.filter(item => item.rating >= 4)
        return filteredItems
    }

    // 
    function concatenateArrays<T>(...arrays: T[][]): T[] {

        const concatenateFinalArray: T[] = []

        for (const subArray of arrays) {
            for (const item of subArray) {
                concatenateFinalArray.push(item)
            }
        }
        return concatenateFinalArray
    }

    //
    class Vehicle {
        constructor(private make: string, public year: number) { }

        public getInfo(): void {
            console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
    }

    class Car extends Vehicle {
        constructor(make: string, year: number, private model: string) {
            super(make, year)
        }

        public getModel(): void {
            console.log(`Model: ${this.model}`);
        }
    }

    //
    function processValue(value: string | number): number {
        if (typeof value === "string") {
            return value.length;
        } else {
            return value * 2;
        }
    }

    //
    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length == 0) return null
        else {
            let highestPriceProduct: Product = products[0]
            for (let i = 1; i < products.length; i++) {
                if (products[i].price > highestPriceProduct.price) {
                    highestPriceProduct = products[i]
                }
            }
            return highestPriceProduct
        }
    }

    //
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        if (day === Day.Saturday || day === Day.Sunday) {
            return "Weekend";
        } else {
            return "Weekday";
        }
    }

    //
    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) reject(new Error("Negative number not allowed"))
                else resolve(n * n)
            }, 1000);
        })
    }

}
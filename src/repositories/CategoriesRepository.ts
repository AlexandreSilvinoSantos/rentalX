import { Category } from "../model/category";

// DTO - Data Transfer Object
interface ICreateCategoryDTO {
    name: string;
    decription: string;
}

class CategoriesRepository {
    private categories: Category[]; //private define como o atributo vai ser acessado.

    constructor() {
        this.categories = [];
    }

    create({ description, name }: ICreateCategoryDTO) {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }
    // listar cadastros das categorias
    list(): Category[] {
        return this.categories;
    }
}

export { CategoriesRepository };
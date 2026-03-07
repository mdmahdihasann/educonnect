import { replaceMongoIdInArray } from "@/lib/convertData";
import { Category } from "@/model/category-model";

export async function getCategory() {
    const category = await Category.find({}).lean();
    return replaceMongoIdInArray(category)
}
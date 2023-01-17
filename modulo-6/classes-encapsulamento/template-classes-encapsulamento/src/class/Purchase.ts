export class Purchase{
    private id: string;
    private userId: string;
    private productId: string;
    private quantity: number;
    private totalPrice: number

    constructor(
        id:string, 
        userId:string, 
        productId:string,
        quantity: number,
        totalPrice:number
    ){
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.totalPrice = totalPrice
    }

    public getId():string{
        return this.id;
    }
    public getUserId():string{
        return this.userId;
    }
    public getProductId():string{
        return this.productId;
    }
    public getQuantity():number{
        return this.quantity;
    }
    public getTotalPrice():number{
        return this.totalPrice;
    }
    public setId(newId:string){
        this.id = newId;
    }
    public setUserId(newUserId:string){
        this.userId = newUserId;
    }
    public setProductId(newProductId:string){
        this.productId = newProductId;
    }
    public setQuantity(newQuantity:number){
        this.quantity = newQuantity;
    }
    public setTotalPrice(newTotalPrice:number){
        this.totalPrice = newTotalPrice;
    }
}
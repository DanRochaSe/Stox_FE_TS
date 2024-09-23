
export type Goals = {

    GoalID: number; 
    Author: string;
    UserID: number;
    DateAdded: Date;
    TargetDate: Date;
    Description: string;
    TargetValue: number;
Period: number;

    Category: Category;


}


export enum Category {
    Mortgage,
    Vehicles,
    Vacation,
    Retirement,
    Savings
}
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BmiService } from '../bmi.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})

export class ResultComponent implements OnInit{
  
  bmi?:number;
  dietPlan?:string[];
  workoutPlan?:string[];
  healthyRecipes?:string[];
  status?:string;
  age:any;
  
  

  constructor(
    private route:ActivatedRoute, private bmiService:BmiService) {}
  
    

    ngOnInit():void{
      this.route.params.subscribe(params=>{
        this.bmi=+params['bmi'];
        this.age=+params['age'];
        
      
      if (this.age<80 && this.bmi<18.5){
          this.status='You are UnderWeight!!';
          this.dietPlan=['1.Increase Caloric Intake: Consume more calories than your body burns',
          '2.Choose Nutrient-Dense Foods: Opt for foods rich in proteins,healthy fats and complex carbohydrates',
          '3.Frequent meals: Eat smaller,more frequent meals to avoid feeling overly full',
          '4.Protein-Rich Foods: Include sources like lean meats,dairy,eggs and legumes',
          '5.Healthy Fats: Incorporate avocados,nuts and olive oil for extra calories'];
          this.workoutPlan=['1.Strength Training: Focus on compound exercises like squats, deadlifts, and bench presses and Aim for 2-3 sessions per week with moderate weights and higher repetitions.',
        
          '2.Cardiovascular Exercise: Include aerobic activities such as brisk walking, cycling, or swimming and Aim for at least 150 minutes of moderate-intensity cardio per week.',
        
          '3.Flexibility and Mobility: Incorporate stretching exercises to improve flexibility and Include yoga or Pilates to enhance overall body mobility.'];
          this.healthyRecipes=['1.High-Calorie Smoothie: Ingredients are Banana, Greek yogurt, almond butter, whole milk. Blend for a nutrient-dense, calorie-rich smoothie.',
          
        ' 2.Avocado and Salmon Salad: Ingredients are Avocado, smoked salmon, mixed greens, olive oil.Provide healthy fats and protein for energy.',
          
        ' 3.Quinoa and Chickpea Bowl: Ingredients are Quinoa, chickpeas, roasted vegetables, feta cheese. A protein-rich and wholesome meal.'];
        }
        
        
        else if(this.age<80 && this.bmi>=18.5 && this.bmi<25) {
          this.status='You are healthy!!';
          this.dietPlan=['1.Balanced Diet: Maintain a mix of proteins,healthy fats and complex carbohydrates',
          '2.Portion Control:Be mindful of portion sizes to prevent overeating',
          '3.Lean Proteins:Include sources like chicken,fish,beans and tofu',
          '4.Colorful Vegetables and Fruits:Aim for a variety of colorful options for a range of nutrients.',
          '5.Hydration:Drink plenty of water and limit sugary drinks'];
          this.workoutPlan=['1.Engage in a mix of aerobic activities, such as running, cycling, or group fitness classes',
          ' 2.Aim for 150 minutes of moderate-intensity cardio or 75 minutes of vigorous-intensity cardio per week.',
        
       
          '3.Include resistance training exercises 2-3 times a week, targeting major muscle groups.',
        
          '4.Integrate exercises that enhance balance, such as stability exercises and yoga'];
          this.healthyRecipes=['1.Grilled Chicken Salad: Ingredients are Grilled chicken breast, mixed greens, cherry tomatoes, balsamic vinaigrette.A balanced and protein-packed salad.',
          
        ' 2. Vegetarian Stir-Fry: Ingredients are Tofu, colorful vegetables, brown rice, soy sauce.A fiber-rich and nutritious stir-fry.',
          
        ' 3.Mediterranean Quinoa Bowl: Ingredients are Quinoa, cherry tomatoes, cucumber, olives, feta cheese. Packed with antioxidants and healthy fats.'];
        }
        
        
        else if(this.age<80 && this.bmi>=25 && this.bmi<30){
          this.status='You are Overweight!!';
          this.dietPlan=['1.Calorie Deficit:Consume fewer calories than your body burns for weight loss',
          '2.Whole foods:Opt for whole,unprocessed foods over processed options',
          '3.High-fiber foods:Include fruits,vegetables and whole grains for satiety',
          '4.Limit Sugars:Reduce intake of added sugars'];
          this.workoutPlan=['1.Begin with low-impact activities like walking or swimming.',
          '2. Gradually increase intensity and duration, aiming for at least 150 minutes per week.',
        
       
          '3. Start with light resistance and progress gradually.',
          '4. Focus on full-body strength training 2-3 times per week.',
        
    
          ' 5.Include exercises with minimal joint impact, such as cycling or water aerobics.'];
          this.healthyRecipes=['1.Grilled Fish Tacos:Ingredients are Grilled white fish, whole wheat tortillas, cabbage slaw, avocado.A lighter option with lean protein and healthy fats.',
        
         '2.Turkey and Vegetable Skewers: Ingredients are Turkey chunks, bell peppers, cherry tomatoes, zucchini. A low-calorie, high-protein option.',
        
         '3.Cauliflower Fried Rice: Ingredients are Cauliflower rice, mixed vegetables, lean chicken, soy sauce.A lower-carb alternative to traditional fried rice'];
        }
        
        
        else if(this.age<80 && this.bmi>=30){
          this.status='You are Obese!!'
          this.dietPlan=['Professional Guidance: Seek guidance from a healthcare professionals or nutritionist','Gradual changes:Make gradual dietary changes to promote sustainable weight loss','Portion Control: Be mindful of portion sizes to avoid overeating','Lean Proteins: Prioritise lean protein sources for muscle maintenance'];
          this.workoutPlan=['1.Start with activities like swimming, stationary cycling, or seated exercises.',
          '2. Aim for at least 150 minutes of moderate-intensity cardio per week.',
        
  
          '3.Begin with resistance exercises using body weight or light resistance.',
          '4. Gradually progress to more challenging strength training exercises.',
        
       
          '5. Include gentle stretching and flexibility exercises to improve range of motion.'];
          this.healthyRecipes=['1.Salmon and Asparagus Bake: Ingredients are Salmon fillets, asparagus, lemon, olive oil. Rich in omega-3 fatty acids and low in saturated fats.',
        
      ' 2.Chicken and Quinoa Stuffed Peppers: Ingredients are Ground chicken, quinoa, bell peppers, tomatoes. A balanced and satisfying dish.',
        
       '3.Veggie-Packed Lentil Soup: Ingredients are Lentils, carrots, celery, spinach, low-sodium vegetable broth. A high-fiber, low-calorie soup option.']
        }
        
        
        else if(this.age>80 && this.bmi<18.5) {
          this.status='You are Underweight!!'
          this.dietPlan=['1.Increase Caloric Intake: Consume more calories than your body burns',
          '2.Choose Nutrient-Dense Foods: Opt for foods rich in proteins,healthy fats and complex carbohydrates',
          '3.Frequent meals: Eat smaller,more frequent meals to avoid feeling overly full',
          '4.Protein-Rich Foods: Include sources like lean meats,dairy,eggs and legumes',
          '5.Healthy Fats: Incorporate avocados,nuts and olive oil for extra calories'];
          this.workoutPlan=['1.Engage in activities like walking, gentle swimming, or seated exercises.',
          '2. Aim for at least 150 minutes of moderate-intensity cardio per week, if possible.',
        
      
          '3. Incorporate light resistance exercises focusing on maintaining muscle mass and bone density.',
          '4. Perform strength training 2 times per week.',
        
      
          '5. Emphasize exercises to improve balance and flexibility, such as tai chi or chair yoga.'];
          this.healthyRecipes=['1.Soft Vegetable Omelette: Ingredients are Eggs, soft-cooked vegetables (e.g., zucchini, mushrooms), herbs.A protein-packed and easy-to-chew option.',
        
          '2.Baked Cod with Mashed Sweet Potatoes: Ingredients are Baked cod fillets, mashed sweet potatoes, steamed green beans. A nutrient-rich and easily digestible meal.',
        
          '3.Fruit and Yogurt Parfait:Ingredients: are Greek yogurt, mixed berries, granola. A light and refreshing option for breakfast or a snack. ']
        }
        
        
        else if(this.age>80 && this.bmi>=18.5 && this.bmi<25) {
          this.status='You are healthy!!'
          this.dietPlan=['1.Balanced Diet: Maintain a mix of proteins,healthy fats and complex carbohydrates',
          '2.Portion Control:Be mindful of portion sizes to prevent overeating',
          '3.Lean Proteins:Include sources like chicken,fish,beans and tofu',
          '4.Colorful Vegetables and Fruits:Aim for a variety of colorful options for a range of nutrients.',
          '5.Hydration:Drink plenty of water and limit sugary drinks'];
          this.workoutPlan=['1.Engage in activities like walking, gentle swimming, or seated exercises.',
          '2. Aim for at least 150 minutes of moderate-intensity cardio per week, if possible.',
        
      
          ' 3.Incorporate light resistance exercises focusing on maintaining muscle mass and bone density.',
          '4. Perform strength training 2 times per week.',
        
      
          '5. Emphasize exercises to improve balance and flexibility, such as tai chi or chair yoga.'];
          this.healthyRecipes=['1.Soft Vegetable Omelette: Ingredients are Eggs, soft-cooked vegetables (e.g., zucchini, mushrooms), herbs.A protein-packed and easy-to-chew option.',
        
          '2.Baked Cod with Mashed Sweet Potatoes: Ingredients are Baked cod fillets, mashed sweet potatoes, steamed green beans. A nutrient-rich and easily digestible meal.',
           
          '3.Fruit and Yogurt Parfait:Ingredients: are Greek yogurt, mixed berries, granola. A light and refreshing option for breakfast or a snack. ']
        }
        
        else if(this.age>80 && this.bmi>=25 && this.bmi<30) {
          this.status='You are Overweight!!'
          this.dietPlan=['1.Calorie Deficit:Consume fewer calories than your body burns for weight loss',
          '2.Whole foods:Opt for whole,unprocessed foods over processed options',
          '3.High-fiber foods:Include fruits,vegetables and whole grains for satiety',
          '4.Limit Sugars:Reduce intake of added sugars'];
          this.workoutPlan=['1.Engage in activities like walking, gentle swimming, or seated exercises.',
          '2. Aim for at least 150 minutes of moderate-intensity cardio per week, if possible.',
        
      
          '3. Incorporate light resistance exercises focusing on maintaining muscle mass and bone density.',
          '4. Perform strength training 2 times per week.',
        
      
          '5. Emphasize exercises to improve balance and flexibility, such as tai chi or chair yoga.'];
          this.healthyRecipes=['1.Soft Vegetable Omelette: Ingredients are Eggs, soft-cooked vegetables (e.g., zucchini, mushrooms), herbs.A protein-packed and easy-to-chew option.',
        
          '2.Baked Cod with Mashed Sweet Potatoes: Ingredients are Baked cod fillets, mashed sweet potatoes, steamed green beans. A nutrient-rich and easily digestible meal.',
           
          '3.Fruit and Yogurt Parfait:Ingredients: are Greek yogurt, mixed berries, granola. A light and refreshing option for breakfast or a snack. ']
        }
        
        
        else{
          this.status='You are Obese!!'
          this.dietPlan=['1.Professional Guidance: Seek guidance from a healthcare professionals or nutritionist',
          '2.Gradual changes:Make gradual dietary changes to promote sustainable weight loss',
          '3.Portion Control: Be mindful of portion sizes to avoid overeating',
          '4.Lean Proteins: Prioritise lean protein sources for muscle maintenance'];
          this.workoutPlan=['1.Engage in activities like walking, gentle swimming, or seated exercises.',
          '2. Aim for at least 150 minutes of moderate-intensity cardio per week, if possible.',
        
      
          '3. Incorporate light resistance exercises focusing on maintaining muscle mass and bone density.',
          '4. Perform strength training 2 times per week.',
        
      
          '5. Emphasize exercises to improve balance and flexibility, such as tai chi or chair yoga.'];
          this.healthyRecipes=['1.Soft Vegetable Omelette: Ingredients are Eggs, soft-cooked vegetables (e.g., zucchini, mushrooms), herbs.A protein-packed and easy-to-chew option.',
        
          '2.Baked Cod with Mashed Sweet Potatoes: Ingredients are Baked cod fillets, mashed sweet potatoes, steamed green beans. A nutrient-rich and easily digestible meal.',
           
          '3.Fruit and Yogurt Parfait:Ingredients: are Greek yogurt, mixed berries, granola. A light and refreshing option for breakfast or a snack. ']
        }
      })
    }

}

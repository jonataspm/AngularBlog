import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { BigCardComponent } from "./components/big-card/big-card.component";
import { SmallCardComponent } from "./components/small-card/small-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuTitleComponent, CommonModule, MenuBarComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularBlog';
  isDark: boolean = true;

  bcard: ICard = {  
    path: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*uiA0nCufUQs-K64ebSUhew.jpeg",  
    title: "Python is No More The King of Data Science",  
    description: `In the world of data science, Python has long reigned supreme, thanks to its robust libraries like NumPy, Pandas, and scikit-learn. However,
     with the emergence of new languages and approaches, many are wondering: is Python losing its top spot? In this thought-provoking article, Abdur Rahman 
     delves into five reasons that suggest Python's reign may be coming to an end. From performance bottlenecks to the rising popularity of alternatives like 
     Julia and R, this discussion promises to spark a healthy debate about the future of programming in data science. Join us as we explore the cracks forming 
     in Python's empire and what it means for developers and data analysts around the globe.`,
    date: "Oct 23, 2024"
  };  

  scards: ICard[] = [  
    {  
      path: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*RhcXmKBYAgirAqDwSy4_7g.png",  
      title: "Exploring the Most Impactful Updates in .NET 9 and C# 13",  
      description: `Must-Know C# 13 and .NET 9 Features`,
      date: "Nov 18, 2024"
    },
    {  
      path: "https://media2.dev.to/dynamic/image/resize:fit:720/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fw3ezul36zczqq4i9n8q1.png",  
      title: "If You Can Answer These 7 Concepts Correctly, You’re Decent at .NET",  
      description: `Perfect for anyone wanting to prove their .NET expertise!`,
      date: "Nov 18, 2024"  
    },
    {  
      path: "https://miro.medium.com/v2/resize:fit:720/1*1Pshhj5n1nTpWE9MO-a0Tw.png",  
      title: "Handling Large Data in .NET Web API: Performance Tips and Techniques",  
      description: `In this article, we explore essential performance tips and techniques for handling large data in .NET Web API. Learn how to optimize API…`,
      date: "Nov 18, 2024"
    }
  ];  
}

interface ICard {  
  path: string;  
  title: string;  
  description: string; 
  date: string; 
}  
export const dataFake: ICard[] = [
    {
        id: "1",
        path: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*uiA0nCufUQs-K64ebSUhew.jpeg",
        title: "Python is No More The King of Data Science",
        description: `In the world of data science, Python has long reigned supreme, thanks to its robust libraries like NumPy, Pandas, and scikit-learn. However,
                        with the emergence of new languages and approaches, many are wondering: is Python losing its top spot? In this thought-provoking article, Abdur Rahman 
                        delves into five reasons that suggest Python's reign may be coming to an end. From performance bottlenecks to the rising popularity of alternatives like 
                        Julia and R, this discussion promises to spark a healthy debate about the future of programming in data science. Join us as we explore the cracks forming 
                        in Python's empire and what it means for developers and data analysts around the globe.`,
        date: "Oct 23, 2024",
        author: "Abdur Rahman",
        subtitle: "5 Reasons Why Python is Losing Its Crown",
        content: `If you are reading this, then there is a high chance that Python is your go-to language when anyone talks about data science, and honestly, no one can argue with that. Python has remained the king of the Data Science Kingdom because of its excellent libraries, such as Numpy, Pandas and scikit-learn.
                    But if something has always been on top, that does not mean that it is safe up there forever. You hear whispers; you see the rise of new languages — maybe you’re wondering,
                    Is Python’s time running out?
                    Okay, before you throw your Jupyter notebook on my face, let me make something very clear: I do think Python is the GOAT. I don’t deny that. Yet, it doesn’t come without flaws either. It might not lose its place in one night, but there are cracks forming.
                    Edit: Hey everyone, this article reflects my personal opinion, and I fully respect that others may disagree. Healthy debate is welcome — after all, different perspectives are what drive progress!
`
    },
    {
        id: "2",
        path: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*RhcXmKBYAgirAqDwSy4_7g.png",
        title: "Exploring the Most Impactful Updates in .NET 9 and C# 13",
        description: `Must-Know C# 13 and .NET 9 Features`,
        date: "Sep 29, 2024",
        author: "Dmytro Korolov",
        content:`.NET 9 is just around the corner, bringing a wealth of changes and improvements. This article will walk you through the most impactful and broadly applicable features in .NET 9 and C# 13.

1. New Lock Object
C# 13 introduces a new System.Threading.Lock type for mutual exclusion. Historically, an object type was used for locking purposes, but now there’s a dedicated Lock type, which is expected to become the future standard for most locking.


Cleaner and Safer Code. It makes code more readable and predictable. Additionally, the compiler will warn you if a Lock instance is incorrectly used as a regular object.
Performance. According to Microsoft, it can be more efficient than locking on an arbitrary object instance.
New Locking Mechanism. EnterScope replaces the Monitor class under the hood. Find the IL code of the example above here. It returns a ref struct that follows the Dispose pattern, allowing seamless use with the using statement.
Asynchronous Limitations. async calls are still not allowed within lock blocks due to inherent limitations in how locks and asynchronous code interact. The traditional SemaphoreSlim approach remains the go-to alternative.

2. Task.WhenEach
Imagine you have a list of tasks that finish at different intervals. You want to process each one as soon as it completes. WaitAll() won’t work here since it waits for all tasks to finish. We can use Task.WaitAny() as a workaround to pick off the next one as it completes. C# 13 introduces a more elegant and efficient approach to handle this scenario: Task.WhenEach. Check out the example below.


Task.WhenEach returns IAsyncEnumerable<Task<TResult>> and allows using await foreach to easily iterate through the tasks as they complete👌

3. params Collections
Starting with C# 13, params parameters can be of any types supported for collection expressions.


Cleaner code. Significantly reduces the number of calls to .ToArray(), .ToList().
Performance. Calls like .ToArray(), .ToList()already add extra resource overhead on their own. Also, it now supports passing Span<> and IEnumerable<>, leveraging more efficient memory usage and lazy execution. Overall, this provides greater flexibility and better performance in scenarios that demand it 🚀.
4. Semi-Auto Properties
When you declare an auto-implemented property in C# public int Number { get; set; }, the compiler generates a backing field (e.g., _number) and internal getter/setter methods void set_Number(int number) and int get_Number(). But if you need custom logic like validation, default values, computations, or lazy loading in a property’s getter or setter, you usually have to manually define the backing field in your class. C# 13 simplifies this by introducing the field keyword, allowing you to access the backing field directly without defining it manually.


Reduced Boilerplate Code. Removes the need for manually defining private backing fields, resulting in cleaner and more concise code.
Enhanced Readability. There’s no need to manage custom backing field names, making the use of the field keyword a standard that improves code clarity.
Property-Scoped Field. The private backing field is confined to the property itself, preventing unintended use elsewhere in the class. This encapsulation improves safety and addresses a common source of errors
🚨Potential Breaking Change. If your class already has a property named field of the same type, it will take precedence over the new field keyword, potentially leading to unexpected behavior. You can find here the C# team's proposal on how to handle this. This might one of the reasons why this feature was delayed since 2016, when it was initially proposed.
5. Hybrid Cache
The new HybridCache API addresses certain gaps in the existing IDistributedCache and IMemoryCache APIs, such as the stampede problem, introduces new features and capabilities, and makes caching in .NET more flexible and performant. HybridCache is designed to be a drop-in replacement for most IDistributedCache and IMemoryCache scenarios.


Best of Both Worlds. The HybridCache gives you the flexibility to store data either in-memory (L1) or in a distributed (L2) cache, using a unified, concise API for both. This setup allows for fast, local access to frequently used data (L1) and a scalable, external cache (L2) that can handle larger, less-frequently-accessed data. HybridCacheEntryFlags are meant to control this behavior.
Stampede Protection. Both IMemoryCache and IDistributedCache suffer from the stampede issue. HybridCache solves this by ensuring that only one caller regenerates the value for a given key, while others wait for the result. This helps avoid excessive cache repopulation.
Extra Features. HybridCache offers extras like Tagging, Configurable Serialization through .WithSerializer(...) and .WithSerializerFactory(...) methods, and Reuse of Cache Instances using the [ImmutableObject(true)] annotation.
💡It might sound a bit tricky at first, but for HybridCache to store data out-of-process (L2), you still need to configure IDistributedCache (e.g., Redis), which HybridCache will then rely on. But even without an IDistributedCache, the HybridCache service will still provide in-process caching. For my case above, I had this configuration:


6. Built-in OpenAPI Document Generation
Starting with .NET 5, Web API templates have been shipped with built-in support for OpenApi via the Swashbuckle.AspNetCore package. In .NET 9, Microsoft continues to support the OpenApi specification through its internally developed package, Microsoft.AspNetCore.OpenApi, which will replace Swashbuckle.AspNetCore.


After running your app, go to /openapi/v1.json to view the generated OpenApi document.

Swagger UI. The syntax has become shorter and appears more ‘native’ at first glance. However, by default, you now only get an OpenAPI document without interactive API documentation😢. If interactive API Documentation, like Swager UI is essential, you'll need to integrate third-party tools like Scalar to achieve this. Here is a detailed guide: Scalar .NET API Reference Integration.
Build-Time Generation. You can also generate OpenAPI documents at build-time using the Microsoft.Extensions.ApiDescription.Server package.
7. SearchValues Improvements
SearchValues was introduced in .NET 8, providing an immutable, read-only set of values optimized for significantly more efficient searching compared to traditional ICollection.Contains. Originally, it was limited to sets of characters or bytes. .NET 9 expands SearchValues<T> to also support strings.


You can now also specify the comparison type using the StringComparison parameter.

In the future, this will definitely be the go-to option for applications that require extensive text processing, in scenarios like documents parsing, input filtration, spam detection, data redaction, search, etc.

8. New LINQ Methods
Three new methods were added: CountBy, AggregateBy, and Index. They are designed to enhance performance and conciseness in common data manipulation tasks. See them in action in the examples below.

CountBy

AggregateBy

Index

My personal favorite is Index()💛because the lack of an index in foreach has always been a pain in the neck and often led to clunkier workarounds.

8. Built-in UUID v7 Generation
Since the early days of .NET, we’ve used Guid.NewGuid() to generate UUIDs. This method produces UUID of version 4. Since then, the UUID specification has advanced significantly, and the current stable version is 7. One of the key features of version 7 is the timestamp that is part of the UUID. That's how it's structured:

+------------------+---------------+----------------------+
| 48-bit timestamp | 12-bit random |    62-bit random     |
+------------------+---------------+----------------------+
The timestamp component facilitates a major benefit: you can sort UUIDs by their creation time. This makes them more suitable for use in databases and provides better guarantees of uniqueness in distributed contexts.

Now, UUID v7 generation is built-in in .NET, so you no longer need to use external libraries like UUIDNext for this purpose. A new method, Guid.CreateVersion7(), has been introduced for this. This method can also accept a timestamp, allowing you to create UUIDs that match specific times. This can be useful for testing purposes or inserting items into a specific position in sorted sequences.


⏳Guid.CreateVersion7() uses NewGuid() under the hood. It integrates a 48-bit timestamp, and sets the correct version and variant bits to conform to UUIDv7 standards . This makes it slightly slower than NewGuid(). Keep this in mind, but unless you need to generate millions of UUIDs, the performance impact will be unnoticeable.

10. Other Features
Below is a list of other interesting changes that are definitely worth your attention but are likely to be adopted less broadly and address more specific use cases.

Implicit index access
Partial properties
Allows ref struct
Base64Url
Collection lookups with spans
Feature switches with trimming support
Regex.EnumerateSplits
New Capabilities of System.Text.Json
OrderedDictionary<TKey, TValue>
ReadOnlySet<T>
Debug.Assert now reports assert condition
New Tensor<T> Type
Find it helpful? Appreciate your 👏 and feedback!`
    },
    {
        id: "3",
        path: "https://media2.dev.to/dynamic/image/resize:fit:720/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fw3ezul36zczqq4i9n8q1.png",
        title: "If You Can Answer These 7 Concepts Correctly, You’re Decent at .NET",
        description: `Perfect for anyone wanting to prove their .NET expertise!`,
        date: "Sep 27, 2024",
        author: "Sukhpinder Singh | C# .Net",
        subtitle: "[Part 6] Perfect for anyone wanting to prove their .NET expertise!",
        content: `Hello .NET Enthusiasts,
Welcome to Part 6 of our C# knowledge test challenge! Please go through the series here.

The next set of questions will test your knowledge of advanced .NET concepts and practices.

1. Abstract Classes v/s Interfaces
What’s the difference between abstract classes and interfaces? Examples of both.

Abstract Classes
Can include fields, constructors and destructors.
Useful when you have a base class with some shared code and want to provide common functionality to derived classes....
`
    },
    {
        id: "4",
        path: "https://miro.medium.com/v2/resize:fit:720/1*1Pshhj5n1nTpWE9MO-a0Tw.png",
        title: "Handling Large Data in .NET Web API: Performance Tips and Techniques",
        description: `In this article, we explore essential performance tips and techniques for handling large data in .NET Web API. Learn how to optimize API…`,
        date: "Oct 20, 2024",
        author: "Abdur Rahman",
        subtitle: "Engr. Md. Hasan Monsur",
        content: `this article, we explore essential performance tips and techniques for handling large data in .NET Web API. Learn how to optimize API response times, manage memory efficiently, and scale your applications to handle high data volumes. By implementing best practices like pagination, data streaming, compression, and caching, you can improve API performance and ensure seamless data delivery at scale.
Handling Large Data in .NET Web API
When a Web API in .NET needs to handle large-scale data, it must do so in a way that ensures performance, scalability, and efficiency. There are several techniques that a .NET server can implement to manage large datasets while keeping the system responsive and avoiding issues like memory overload or slow response times.
Here are key strategies for providing large-scale data in a .NET Web API:

1. Pagination
How it works: The server provides data in smaller chunks or pages, allowing the client to request only a portion of the dataset at a time. This is especially useful for datasets that are too large to return in a single request.

Implementation: Use query parameters to allow the client to specify the page number and size. The API method should return only the data for the requested page.

`
    }
];  

interface ICard {
    id:string;
    path: string;
    title: string;
    description: string;
    date: string;
    author?: string;
    subtitle?: string;
    content?: string;
}  
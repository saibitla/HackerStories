##Assumptions / Analysis made for development

1.Since the request was to display only the latest stories, used api url - 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty' which gets the latest 500 story ids(reference from api documentation) in the parent component.

2.Used the api url - 'https://hacker-news.firebaseio.com/v0/item/[SomeID].json?print=pretty' to get specific story details using ID in the child component.

3.Not implemented any comments/users section.

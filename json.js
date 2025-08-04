export const json_JSON =  JSON.stringify([
  {
    type: 'View',
    style: {
      flex: 1,
      flexDirection: 'row',
      gap: 5,
      marginHorizontal: 5,
    },
    children: [
{
    type: 'View',
    style: {
      flex: 1,
    },
    children: [
{
    type: 'View',
    style: {
      flexDirection: 'row',
      gap: 20,
      borderBottomWidth: 0.5,
      borderColor: 'grey',
      paddingBottom: 5
    },
    children: ['For You', 'Following', 'Featured', 'Software'].map(( text, index ) => ({
        type: 'Text',
        text,
        style: {
          borderBottomWidth: index == 0 ? 1 : 0,
        }
      })),
  },
  ...([
    {
    title: 'Why Instagram Switched to React Native (Again) — And How It Finally Worked This Time',
    body: 'In 2023, Meta quietly reignited its commitment to React Native. This time, with real production results.',
    author: 'TechPreneur',
    date: '15 Jul',
    image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Y6nV7vcXwaJ1p0YmgcG7dQ.png',
    actions: [{
      url: 'https://placehold.co/10',
      text: '129 Claps'
    },{
      url: 'https://placehold.co/10',
      text: '6 Cmts'
    },
    ]
    },
    {
    title: 'Swiggy SDE II Frontend Interview Experience',
    body: 'In my job switch journey, I was targeting product-based firms. In that context, I got the opportunity to interview for companies...',
    author: 'Kartik Joshi',
    date: '4 Days Ago',
    image: 'https://miro.medium.com/v2/resize:fit:2000/format:webp/0*q8ookLj5eGYhmeqW',
    actions: [{
      url: 'https://placehold.co/10',
      text: '62 Claps'
    },{
      url: 'https://placehold.co/10',
      text: '6 Cmts'
    }
    ]
  }].map(({ author, title, body, image, date, actions }) => ({
    type: 'View',
    style: {
      gap: 5,
      marginTop: 20,
    },
    children: [
      {
        type: 'Text',
        text: `AU: ${author}`,
        style: {
          fontSize: 12,
          color: 'grey',
        }
      },
      {
        type: 'View',
        style: {
          flexDirection: 'row',
          gap: 10,
        },
        children: [
          {
            type: 'View',
            style: {
              flex: 1,
              gap: 10,
            },
            children: [
              {
                type: 'Text',
                text: title,
                style: {
                  fontSize: 20,
                  fontWight: '700',
                }
              },
              {
                type: 'Text',
                text: body,
                style: {
                  fontSize: 15,
                  fontWight: '400',
                  color: 'grey'
                }
              },
              {
                type: 'View',
                style: {
                  flexDirection: 'row',
                  gap: 10,
                  flexWrap: 'wrap'
                },
                children: [
                  {
                    type: 'Text',
                    text: date,
                  },
                  ...(actions.map(({ url, text }) => ({
                    type: 'View',
                    style: {
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    },
                    children: [
                      {
                        type: 'Image',
                        url,
                        style: {
                          height: 10,
                          width: 10,
                        }
                      },
                      {
                        type: 'Text',
                        text,
                      }
                    ]
                  }))),
                ]
              }
            ]
          },
          {
            type: 'Image',
            url: image,
            style: {
              height: 100,
              width: 100,
            }
          }
        ]
      }
    ]
  })))
    ]
  },
  {
    type: 'View',
    style: {
      width: 100,
      borderLeftWidth: 0.5,
      borderColor: 'grey',
      paddingLeft: 5,
    },
    children: [
      {
        type: 'Text',
        text: 'Placeholder Item',
      }
    ]
  }
    ]
  }
  ])

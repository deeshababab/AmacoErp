import React, { useState, useEffect } from "react";
import { Menu, MenuItem, Typography, Grid, TextField } from "@material-ui/core";
import url from "../invoice/InvoiceService";

import NestedMenuItem from "material-ui-nested-menu-item";

export const NestedMenu = () => {
  const [menuPosition, setMenuPosition] = useState(null);
  const [cat, setcat] = useState([]);
  const [subcat, setsubcat] = useState([]);
//   const data = [
//     {
//       title: "Top level 1",
//       slug: "top-level-1",
//       children: [
//         {
//           title: "Sub level 1",
//           slug: "sub-level-1",
//           children: [
//             {
//               title: "Sub Sub Level 1",
//               slug: "sub-sub-level-1",
//               children: [
//                 {
//                   title: "Sub Sub sub Level 1",
//                   slug: "Sub Sub sub Level 1",
//                   children: [
//                     {
//                       title: "Sub Sub sub  sub Level 1",
//                       slug: "Sub Sub sub  sub Level 1",
//                       children: [
//                         {
//                           title: "Sub Sub sub  sub sub Level 1",
//                           slug: "sSub Sub sub  sub sub Level 1",
//                           children: [
//                             {
//                               title: "Sub Sub Level 2",
//                               slug: "sub-sub-level-2"
//                             }
//                           ]
//                         }
//                       ]
//                     },
                    
//                   ]
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           title: "Sub level 2",
//           slug: "sub-level-2"
//         }
//       ]
//     },
//     {
//       title: "Top level 2",
//       slug: "top-level 2"
//     }
//   ];
 
 
  const handleRightClick = (event: React.MouseEvent) => {
    url.get("account-categories").then(({ data }) => {
  
      setcat(data)
    })
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX
    });
  };
  // const NestedMenu = ({cat}) => {
  //   url.get("account-categories").then(({ data }) => {
  //     return (
  //      <Menu>
  //     {data.map(m => {
        
      
  //       return (
  //          <NestedMenuItem data={m.category} label="abcde">
  //            </NestedMenuItem>
  //       );
  //     })
  //   }
  //   </Menu>
  //     )
  //   })
  //   }
  const data = [
    {
        id:"1",
      title: "Top level 1",
      slug: "top-level-1",
      children: [
        {
          id:'sub1',
          title: "Sub level 1",
          slug: "sub-level-1",
          children: [
            {
                id:'sub sub 1',
              title: "Sub Sub level 1",
              slug: "sub-Sub-level-1",
              
            },
            
            
          ]
        },
        
        
      ]
    },
    {
        id:'2',
        title: "Top level 2",
        slug: "top-level-2",
        children: [
          {
            id:'sub 2',
            title: "Sub level 2",
            slug: "sub-level-2",
          }
        ]
      },
      {
        id:'3',
        title: "Top level 3",
        slug: "top-level-3",
        
      }
];
  const Menu1 = ({data}) => {
     
    return (<li>
        
        
          {/* <NestedMenuItem
            label={data[0].title}
            parentMenuOpen={handleItem}
            value="1"
            onClick={e => handleItem(e.target.value)}
          > */}
          <MenuItem onClick={e => handleItem()}>+ Add New</MenuItem>
        {data.map((m,ind) => {
          return ( 
          <NestedMenuItem
            label={data[ind].title}
            parentMenuOpen={handleItem}
            // value={data[ind].title}
            onClick={e => handleItem(data[ind].title)}
          >
              
                   
                 
                     
                            {/* <Menu1 data={m.children}></Menu1> */}
                            {m.children && <Menu1 data={m.children} />}
                    
                       
                    {/* {m.children && <Menu1 data={m.children} />} */}
                  
                  
                  
            
           
         </NestedMenuItem>
         
          );
        })}
      </li>
    );
  }

  const handleItemClick = (event: React.MouseEvent) => {
    setMenuPosition(null);
  };
  const handleItem = (e) => {

    // setMenuPosition(null);
    alert(e)

  };


  return (
    <div onClick={handleRightClick}>
      <Typography>Right click to open menu</Typography>

      <Menu
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}

      >
        {/* <MenuItem onClick={handleItemClick}>+ Add New</MenuItem>
        {data.map((item, ind) => (
          <NestedMenuItem
            label={item.title}
            parentMenuOpen={handleItem}
            value="1"
            onClick={e => handleItem(e.target.value)}
          >
            <MenuItem onClick={e => handleItem(item.category.id)}>+ Add New</MenuItem>
            <MenuItem data={data}></MenuItem>
            {item.children.map((items, ind) =>
            ( */}
            {/* <MenuItem onClick={e => handleItem(item.category.id)}> */}
                <Menu1 data={data}></Menu1>
            {/* </MenuItem> */}
            {/* )
            )
            }
             
          </NestedMenuItem> */}
        {/* ))} */}


      </Menu>
      {/* </TextField> */}
      <div className="px-4 flex justify-center">

        <div className="flex " >
        {/* <Menu
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}

      > 
        <NestedMenuItem data={cat} 
        label={cat.name}
            parentMenuOpen={handleItem}
         >
           <Menu>{cat.name}</Menu>
           </NestedMenuItem>
           
        </Menu> */}
          
                  </div>
                 
        <div>
        </div>
      </div>
    </div>


  );
};

export default NestedMenu;

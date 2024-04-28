import { useState } from 'react';
import { BrandLocal } from '../../utils/data/BrandLocal';
import ItemProducts from '../restaurants/ItemProducts';
function Products() {
    //state close menu
  const [closeTab, setCloseTab] = useState(true);
  const handleMenuSelect = () => {
      setCloseTab(true);
  };
  const handleMenuSelected = () => {
      setCloseTab(false);
  };
    return ( 
        <div id='' style={{ width: 1200 }}>
            {BrandLocal[0].menu.map((itemMenu, indexMenu) =>(
                        <div name={itemMenu.navProduct} key={itemMenu.id}>
                            <h1 className="text-3xl font-bold p-4">{itemMenu.navProduct}</h1>
                            <div key={indexMenu} className="grid lg:grid-cols-3 gap-5 grid-cols-1 lg:w-[1200px] p-4 w-full">
                                {itemMenu.itemProduct.map((itemProduct,indexProduct) =>(
                                    <div onClick ={() => setCloseTab(!closeTab) } key={itemMenu.itemProduct.idProduct}>
                                        <ItemProducts  {...itemProduct}></ItemProducts>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
        </div>
     );
}

export default Products;
'use client';

import { useCallback, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

// Constants
import { CELL, mada, MESSAGE_API, QUERY, SIZE, STATUS } from '@/constants';

// Interfaces
import { IWishlist, IProduct, ICart, IUser } from '@/interfaces';

// Libs + stores
import { getUserWishList, getUserCart, updateCart } from '@/libs';

// Components
import {
  ModalDelete,
  WishList,
  ToastMessage,
  Empty,
  Body,
  Cell,
  Head,
  Row,
  Table
} from '@/ui/components';

// Hooks
import {
  useAddDataToCart,
  useModal,
  useRemoveFromWishlist,
  useUpdateDataToCart
} from '@/hooks';

interface WishListSectionProps {
  products: IProduct[];
  user: IUser;
}

const WishListSection = ({ user, products }: WishListSectionProps) => {
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    status: STATUS;
    message: string;
  } | null>(null);

  const removeFromWishlist = useRemoveFromWishlist();
  const addDataToCart = useAddDataToCart();
  const updateDataToCart = useUpdateDataToCart();

  const queryClient = useQueryClient();
  const { isOpen, closeModal, openModal } = useModal();

  // Fetch wishlist items
  const { data: wishlist = [], error: wishlistError } = useQuery<IWishlist[]>({
    queryKey: [QUERY.WISHLIST],
    queryFn: () => getUserWishList(user!.id),
    enabled: !!user
  });

  // Handle toggle modal delete product
  const handleOpenModal = (id: string) => {
    setProductToDelete(id);
    openModal();
  };

  // Handle delete product from wishlist
  const handleDeleteProduct = useCallback(() => {
    if (productToDelete) {
      removeFromWishlist.mutate(productToDelete);
      closeModal();
      setProductToDelete(null);
    }
  }, [productToDelete, removeFromWishlist]);

  // Handle adding product to cart
  const handleAddProductCart = useCallback(
    async (productId: string) => {
      const cartItems = await getUserCart(user!.id);

      const existingItem = cartItems.find(
        (cartItem: ICart) =>
          cartItem.productId === productId && cartItem.userId === user?.id
      );

      if (existingItem) {
        updateDataToCart.mutate({
          id: existingItem.id,
          data: { quantity: existingItem.quantity + 1 }
        });
        setToast({
          status: STATUS.SUCCESS,
          message: MESSAGE_API.UPDATE_CART_SUCCESS
        });
      }
      if (!existingItem) {
        const newItem: ICart = {
          id: uuidv4(),
          userId: user!.id,
          productId: productId,
          color: 'White',
          note: '',
          quantity: 1
        };
        addDataToCart.mutate(newItem);
        setToast({
          status: STATUS.SUCCESS,
          message: MESSAGE_API.ADD_PRODUCT_SUCCESS
        });
      }
    },
    [user, queryClient]
  );

  if (wishlistError)
    return <p>Error loading wishlist: {wishlistError.message}</p>;
  const renderRowEmpty = <Empty />;
  const renderRowData = wishlist.map((item) => {
    const product = products.find((p) => p.id === item.productId);

    if (!product) return null;

    return (
      <WishList
        key={item.id}
        id={item.id}
        productId={product.id}
        image={product.image}
        nameProduct={product.name}
        isDisable={addDataToCart.isPending}
        price={product.price}
        stoct={product.stoct}
        onAddCart={handleAddProductCart}
        onDelete={handleOpenModal}
      />
    );
  });
  return (
    <>
      <section className="my-20 container">
        <div className={`${mada.className} h-table overflow-y-auto scrollbar`}>
          <Table>
            <Head>
              <Row styles="lg:flex hidden">
                <Cell size={SIZE.SMALL} type={CELL.TH}></Cell>
                <Cell size={SIZE.SMALL} type={CELL.TH}>
                  Product
                </Cell>
                <Cell size={SIZE.LARGE} type={CELL.TH}></Cell>
                <Cell size={SIZE.MEDIUM} type={CELL.TH}>
                  Price
                </Cell>
                <Cell size={SIZE.MEDIUM} type={CELL.TH}>
                  Stock Status
                </Cell>
                <Cell size={SIZE.MEDIUM} type={CELL.TH}></Cell>
              </Row>
            </Head>
            <Body>{!wishlist.length ? renderRowEmpty : renderRowData}</Body>
          </Table>
        </div>
      </section>
      <ModalDelete
        onClick={handleDeleteProduct}
        isOpen={isOpen}
        onClose={closeModal}
      />
      {toast && <ToastMessage status={toast.status} message={toast.message} />}
    </>
  );
};

export default WishListSection;

import { createBrowserRouter } from "react-router";
import { AmisolumiLayout } from "../common/layouts/amisolumi-layout";
import { Landing } from "../app/landing/landing";
import { CrochetItems } from "../app/crochet-items/crochet-items";
import { Admin } from "../app/admin/admin";
import { MyAccount } from "../app/my-account/my-account";
import { Cart } from "../app/cart/cart";
import { Users } from "../app/users/users";
import { Categories } from "../app/categories/categories";
import { Orders } from "../app/orders/orders";
import { ManageCrochetItems } from "../app/manage-crochet-items/manage-crochet-items";
import { CrochetItem } from "../app/crochet-items/crochet-item";
import { SignIn } from "../app/auth/sign-in";
import { SignUp } from "../app/auth/sign-up";
import { Order } from "../app/orders/order";
import { CreateCrochetItem } from "../app/manage-crochet-items/create-crochet-item";
import { MyOrders } from "../app/orders/my-orders";
import { UpdateCrochetItemPage } from "../features/manage-crochet-items/pages/update-crochet-item-page";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: AmisolumiLayout,
        children: [
            {
                index: true,
                Component: Landing
            },
            {
                path: "crochet-items",
                Component: CrochetItems
            },
            {
                path: "crochet-items/:id",
                Component: CrochetItem
            },
            {
                path: "sign-in",
                Component: SignIn
            },
            {
                path: "sign-up",
                Component: SignUp
            },
            {
                path: "admin",
                Component: Admin,
                children: [
                    {
                        path: "users",
                        Component: Users
                    },
                    {
                        path: "categories",
                        Component: Categories
                    },
                    {
                        path: "crochet-items",
                        Component: ManageCrochetItems
                    },
                    {
                        path: "orders",
                        Component: Orders
                    }
                ]
            },
            {
                path: "admin/crochet-items/create",
                Component: CreateCrochetItem
            },
            {
                path: "admin/crochet-items/edit/:id",
                Component: UpdateCrochetItemPage
            },
            {
                path: "my-account",
                Component: MyAccount
            },
            {
                path: "my-cart",
                Component: Cart
            },

            {
                path: "orders/:id",
                Component: Order
            },
            {
                path: "my-orders/",
                Component: MyOrders
            }
        ]
    }
]);
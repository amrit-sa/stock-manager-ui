import { Avatar, Typography } from "antd"

const { Title } = Typography;

export const ProductInfoColumn = ({ product }) => {

    return (
        <>
            <Avatar.Group>
                <Avatar
                    className="shape-avatar"
                    shape="square"
                    size={40}
                    src={product?.img || null}
                ></Avatar>
                <div className="avatar-info">
                    <Title level={5}>{product.name || ''}</Title>
                    <p>{product.description || ''}</p>
                </div>
            </Avatar.Group>{" "}
        </>
    )
}
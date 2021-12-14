import {
  Favorite,
  FavoriteBorder,
  AddShoppingCart,
} from '@styled-icons/material-outlined';
import { Ribbon, RibbonColors, RibbonSizes } from '../Ribbon';
import { Button } from '../Button';
import * as Styled from './styles';

export type GameCardProps = {
  img: string;
  title: string;
  developer: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: string;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

export const GameCard = ({
  img,
  title,
  developer,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
}: GameCardProps) => {
  return (
    <Styled.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      <Styled.ImageBox>
        <img src={img} alt={title} />
      </Styled.ImageBox>
      <Styled.Content>
        <Styled.Info>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Developer>{developer}</Styled.Developer>
        </Styled.Info>
        <Styled.FavButton role="button" onClick={onFav}>
          {favorite ? (
            <Favorite aria-label="Remove from wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to wishlist" />
          )}
        </Styled.FavButton>
        <Styled.BuyBox>
          {!!promotionalPrice && (
            <Styled.Price isPromotional>{price}</Styled.Price>
          )}
          <Styled.Price>{promotionalPrice || price}</Styled.Price>
          <Button size="small" icon={<AddShoppingCart />} />
        </Styled.BuyBox>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

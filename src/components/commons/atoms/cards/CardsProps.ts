import { ColorsType } from '../../../../styles/ColorsType';
export interface CardsProps {
  title: string
  description: string
  width: string
  minHeight: string
  bgColor: ColorsType
  src?: string
  textColor: ColorsType;
}
import { Chip, NumberChip, Number, Text } from "./PokeNameChip.styles"


interface PokeNameChipProps {
  name: string
  id: number
  color: string
}

const PokeNameChip = (props: PokeNameChipProps) => {
  const renderNumber = (id:number) => {
    const digits = 3;
    const numberString = id.toString();

    if(numberString.length >= digits) {
      return numberString;
    }

    let result = '';

    for(let i = 0; i < digits - numberString.length; i++) {
      result += '0';
    }

    return `${result}${numberString}`
  }

  return (
    <Chip>
      <NumberChip color={props.color}>
        <Number>{renderNumber(props.id)}</Number>
      </NumberChip>
      <Text>{props.name}</Text>
    </Chip>
  );
}

export default PokeNameChip;
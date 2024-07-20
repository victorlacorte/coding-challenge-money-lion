import { Card, Skeleton, View } from 'reshaped';

function Loader() {
  return (
    <Card className="[&:not(:last-child)]:mb-3">
      <View gap={5} direction="row" align="center">
        <Skeleton width={12} height={12} borderRadius="medium" />
        <View.Item grow>
          <View gap={3}>
            <View gap={2}>
              <Skeleton width="50%" />
              <Skeleton width="75%" />
            </View>
            <Skeleton height={7} width={25} borderRadius="large" />
          </View>
        </View.Item>
      </View>
    </Card>
  );
}

function SearchListLoader() {
  return Array.from({ length: 5 }, (_, index) => <Loader key={index} />);
}

export default SearchListLoader;

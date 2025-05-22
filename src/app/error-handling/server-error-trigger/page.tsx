import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function getDataThatThrowsError() {
  // 의도적으로 에러 발생
  await new Promise((resolve) => setTimeout(resolve, 100)); // 약간의 딜레이 후 에러
  throw new Error("서버 컴포넌트에서 의도적으로 발생시킨 에러입니다!");
  // return "이 데이터는 반환되지 않습니다.";
}

export default async function ServerErrorTriggerPage() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = await getDataThatThrowsError();
    // 위 라인에서 에러가 발생하므로 이 부분은 실행되지 않음
  } catch (error) {
    // 서버 컴포넌트 내에서 직접 에러를 throw하면 Next.js의 에러 바운더리가 처리합니다.
    // 따라서 여기서 별도의 try-catch로 사용자에게 UI를 보여줄 필요는 없으나,
    // 로깅 등의 목적으로 사용할 수는 있습니다.
    // console.error("ServerErrorTriggerPage caught an error:", error);
    // 에러를 다시 throw하여 error.tsx가 작동하도록 합니다.
    if (
      error instanceof Error &&
      error.message.includes(
        "서버 컴포넌트에서 의도적으로 발생시킨 에러입니다!"
      )
    ) {
      throw error;
    }
    // 예기치 않은 다른 에러는 여기서 다르게 처리할 수도 있습니다.
    throw new Error("서버 에러 트리거 페이지에서 예기치 않은 오류 발생");
  }

  // 이 부분은 getDataThatThrowsError에서 에러가 발생하면 도달하지 않습니다.
  // 만약 도달한다면 에러 발생 로직에 문제가 있는 것입니다.
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl text-green-600">
          에러 미발생 (오류!)
        </CardTitle>
        <CardDescription>
          서버 컴포넌트에서 에러가 정상적으로 발생하지 않았습니다. 코드를
          확인해주세요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>이 메시지가 보이면 에러 발생 로직에 문제가 있는 것입니다.</p>
      </CardContent>
    </Card>
  );
}

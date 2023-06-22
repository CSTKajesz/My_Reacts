const FontSmoothy = () => {
  return (
  <>
  <ul class="container mx-auto divide-y divide-gray-400 divide-dotted" style="font-family: Raleway">

  <li class="flex items-center justify-between px-4 py-2">
    <div class="antialiased">
      <div class="font-light text-4xl align-middle mb-2">Sergeant</div>
      <p class="text-md">Sergeant is always nearby to lend a helping claw to his fellow factory automation friends. Being able to pull 2000 pounds has its distinct advantages, and Sergeant is never bored. He also serves the City of Binaryville as an emergency services volunteer. His strength, determination, and kindness have saved the day on many occasions.</p>
      <div class="text-xs font-mono font-light text-gray-500 mt-2"><span class="font-bold">-webkit-font-smoothing</span>: antialiased;<br></br><span class="font-bold">-moz-osx-font-smoothing</span>: grayscale;</div>
    </div>
    <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">antialiased</div>
  </li>

  <li class="flex items-center justify-between px-4 py-2">
    <div class="subpixel-antialiased">
      <div class="font-light text-4xl align-middle mb-2">Sergeant</div>
      <p class="text-md">Sergeant is always nearby to lend a helping claw to his fellow factory automation friends. Being able to pull 2000 pounds has its distinct advantages, and Sergeant is never bored. He also serves the City of Binaryville as an emergency services volunteer. His strength, determination, and kindness have saved the day on many occasions.</p>
      <div class="text-xs font-mono font-light text-gray-500 mt-2"><span class="font-bold">-webkit-font-smoothing</span>: auto;<br></br><span class="font-bold">-moz-osx-font-smoothing</span>: auto;</div>
    </div>
    <div class="text-xs font-semibold font-mono whitespace-nowrap px-2 py-1 ml-5 rounded text-white bg-pink-500 rounded-2">subpixel-antialiased</div>
  </li>

</ul>
  </>
  )
  }
  export default{FontSmoothy}
import com.rafaelrozon.lists.World;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;

public class WorldTest {

    @Test
    public void sumTest() {
        World w = new World();
        int result = w.sum(1);
        Assertions.assertEquals(result, 3);
    }

}
